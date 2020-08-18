import React, { memo } from 'react'

import {
  PlayerHeaderWrapper
} from './style'
import { useSelector, shallowEqual } from 'react-redux'
export default memo(function PlayerHeader() {
  const { songList, currentSong } =useSelector(state => ({
    songList: state.getIn(['song', 'songList']),
    currentSong: state.getIn(['song', 'currentSong'])
  }), shallowEqual)
  return (
    <PlayerHeaderWrapper>
      <div className="left">
        <h4>播放列表({songList.length})</h4>
        <div className="btns">
          <a href="" className="col-all"><i className="sprite_playlist icon favor"></i>收藏全部</a>
          <a href="" className="clear"><i className="sprite_playlist icon remove"></i>清除</a>
        </div>
      </div>
      <div className="right">
        <p className="song-name">{currentSong.name}</p>
        <span className="close sprite_playlist"></span>
      </div>
    </PlayerHeaderWrapper>
  )
})
