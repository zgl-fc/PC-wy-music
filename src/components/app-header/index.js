import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import classNames from 'classnames';

import { headerLinks } from '@/common/local-data';


import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function FCAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }
    else {
      return <a href={item.link} target="blank">{item.title} </a>
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className={classNames('logo','sprite_01')}>网易云音乐</a>
          {
            headerLinks.map((item, index) => {
              return (
                <div 
                  key={item.title} 
                  className={classNames("select-item")} 
                  >
                  {showSelectItem(item, index)}
                </div>
              )
            })
          }
        </HeaderLeft>
        <HeaderRight>
          <Input className="search"  placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
          <a href="https://music.163.com/#/login?targetUrl=%2Fst/creator" className="create-btn">创作者中心</a>
          <a href="https://www.baidu.com">登陆</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
