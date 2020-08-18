import React, { memo } from 'react'

import {
  getCount
} from '@/utils/format-util'

import {
  SongsCoverWrapper
} from './style'
export default memo(function ThemeCover(props) {
  const { info, right } = props;
  return (
    <SongsCoverWrapper>
      <div className="img-cover">
        <img src={info.picUrl} alt=""/>
        <a href={`#/playlist?id=${info.id}`} className="mask sprite_covor">{''}</a>
        <div className="cover-bottom sprite_covor">
          <span className="video-views">
            <i className="listen sprite_icon"></i>
            {getCount(info.playCount)}
          </span>
          <i className="play sprite_icon"></i>
        </div>
      </div>
      <div className="img-dec">
        <p className="dec"><a href={`#/playlist?id=${info.id}`}>{info.name}</a></p>
        <p className="author"></p>
      </div>
    </SongsCoverWrapper>
  )
})
