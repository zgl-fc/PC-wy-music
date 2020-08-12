import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getArtistListAction
} from '../../store/actionCreators'

import {
  getSizeImage
} from '@/utils/format-util'

import FCThemeHeaderSmall from '@/components/theme-header-small'
import {
  SettleSingerWrapper
} from './style'
export default memo(function SettleSinger() {
  // redux
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    artistList: state.getIn(['recommend', 'artistList'])
  }), shallowEqual)

  // hooks
  useEffect(() => {
    dispatch(getArtistListAction())
  }, [dispatch])
  return (
    <SettleSingerWrapper>
      <FCThemeHeaderSmall title={'入驻歌手'} more={'查看全部>'} />
      <ul className="singer-list">
        {
          state.artistList.map((item, index) => {
            return (
              <li key={item.id}>
                <a href={`#/user/home?id=${item.id}`} className="singer-item">
                  <img src={getSizeImage(item.picUrl)} alt="" />
                  <div className="info">
                    <h4>{item.alias.join("") || item.name}</h4>
                    <p>{item.name}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
