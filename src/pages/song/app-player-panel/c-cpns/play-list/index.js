import React, { memo, useRef, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import classnames from 'classnames'

import { formatMinuteSecond } from '@/utils/format-util';

import {
  getCurrentSongAction,
  delSongFromListAction
} from '../../../store/actionCreators'

import {
  PlayListWrapper
} from './style'
export default memo(function PlayList() {

  // redux 
  const { songList, currentSongIndex } = useSelector(state => ({
    songList: state.getIn(['song', 'songList']),
    currentSongIndex: state.getIn(['song', 'currentSongIndex'])
  }), shallowEqual)
  const dispatch = useDispatch()

  const listPanel = useRef()
  useEffect(() => {
    //滚到当前播放的歌 前三个的话在顶部 后面三个的话滚动去掉前三的高度每条28px
    if (currentSongIndex < 3) listPanel.current.scrollTop = 0
    listPanel.current.scrollTop = (currentSongIndex - 3) * 28
  }, [currentSongIndex])
  return (
    <PlayListWrapper>
      <ul className="list" ref={listPanel}>
        {
          songList.map((item, index) => {
            return (
              <li
                className={classnames("song-item", { "is-playing": index === currentSongIndex })}
                key={item.id}
                onClick={() => dispatch(getCurrentSongAction(item.id)) }
                >
                <span className="play sprite_playlist"></span>
                <span className="songName col">{item.name}</span>
                <div className="icons">
                  <i className="ico icn-del sprite_playlist" title="删除" onClick={(e) => { e.stopPropagation();dispatch(delSongFromListAction(index))}}>删除</i>
                  <i className="ico ico-dl sprite_playlist" title="下载">下载</i>
                  <i className="ico ico-share sprite_playlist" title="分享">分享</i>
                  <i className="ico ico-add sprite_playlist" title="收藏">收藏</i></div>
                <span className="singer col text-nowrap">{item.ar[0].name}</span>
                <span className="duration col">{formatMinuteSecond(item.dt)}</span>
                <a href="" className="link"></a>
              </li>
            )
          })
        }
      </ul>
    </PlayListWrapper>
  )
})
