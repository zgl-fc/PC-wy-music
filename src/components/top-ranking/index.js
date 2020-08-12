import React, { memo } from 'react'

import classnames from 'classnames'

import {
  getSizeImage
} from '@/utils/format-util'

import {
  TopRankingWrapper
} from './style'
export default memo(function FCTopRanking(props) {
  const { info } = props;
  const tracks = (info.tracks && info.tracks.slice(0, 10)) || []
  return (
    <TopRankingWrapper>
      <dl className="top-list-item">
        <dt className="header">
          <div className="header-image">
            <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
            <a href={`#/discover/toplist?id=${info.id}`} className="image_cover">top</a>
          </div>
          <div className="header-title">
            <a href={`#/discover/toplist?id=${info.id}`}>{info.name}</a>
            <div className="btn">
              <a href="/play" className="play sprite_02"></a>
              <a href="/favor" className="collect sprite_02"></a>
            </div>
          </div>
        </dt>
        {
          tracks.map((item, index) => {
            return (
              <dd key={item.id} className="top-item">
                <span className={classnames("no", { "top-3": index < 3 })}>{index + 1}</span>
                <a href={`#/song?id=${item.id}`} className="song text-nowrap">{item.name}</a>
                <div className="opr">
                  <a href="" className="top-play sprite_02">播放</a>
                  <a href="" className="top-add sprite_icon2">添加</a>
                  <a href="" className="top-collect sprite_02">收藏</a>
                </div>
              </dd>
            )
          })
        }
      </dl>
      <div className="more">
        <a href={`#/discover/toplist?id=${info.id}`}>查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
