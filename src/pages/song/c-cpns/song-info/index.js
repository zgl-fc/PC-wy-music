import React, { memo, useState, Fragment } from 'react'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'

import classnames from 'classnames'
import { getSizeImage } from '@/utils/format-util'
import {
  getCurrentSongAction
} from '../../store/actionCreators'
import {
  SongInfoWrapper
} from './style'
export default memo(function SongInfo(props) {
  const { songInfo,lyricArr } = props
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()
  // handle var
  const picUrl = songInfo.al && songInfo.al.picUrl
  const singerName = (songInfo.ar && songInfo.ar[0].name) || '不知道谁唱的'
  const album = (songInfo.al && songInfo.al.name) || '不知道'

  return (
    <SongInfoWrapper>
      <div className="song-img">
        <img src={getSizeImage(picUrl, 130)} alt="" />
        <span className="mask sprite_covor"></span>
      </div>
      <div className="song-detail">
        <div className="header">
          <i className="lab sprite_icon2"></i>
          <div className="tit">
            <p className="main-tit">{songInfo.name}</p>
            <p className="sub-tit">{songInfo.alia && songInfo.alia[0]}</p>
          </div>
        </div>
        <p className="des">歌手：<a href="">{singerName}</a></p>
        <p className="des">所属专辑：<a href="">{album}</a></p>
        <div className="song-btn">
          <div className="play">
            <a
              href="javascript:;"
              className="ply sprite_button"
              onClick={e => dispatch(getCurrentSongAction(songInfo.id))}
            >
              <i className="ico-ply sprite_button"></i>播放
                  </a>
            <a href="javascript:;" title="添加到播放列表" className="add-list">+</a>
          </div>
          <a href="javascript:;"><i className="icon-col sprite_button"></i>收藏</a>
          <a href="javascript:;"><i className="icon-sha sprite_button"></i>分享</a>
          <a href="javascript:;"><i className="icon-down sprite_button"></i>下载</a>
          <a href="javascript:;" className="com-count"><i className="icon-com sprite_button"></i> (<span>38812</span>)</a>
        </div>
        <div className="lyric-content">
          {
            lyricArr.slice(0, 14).map((item, index) => {
              return (
                <Fragment key={item.txt + index}>
                  {item.txt}
                  <br />
                </Fragment>
              )
            })
          }
          <div className={classnames({ 'hide': !isOpen })}>
            {
              lyricArr.slice(14).map((item, index) => {
                return (
                  <Fragment key={item.txt + index}>
                    {item.txt}
                    <br />
                  </Fragment>
                )
              })
            }
          </div>
          <div className="col">
            <a href="javascript:;" onClick={() => { setIsOpen(!isOpen) }}>
              {isOpen ? '收起' : '展开'}
              <i
                className={classnames("sprite_icon2", { "icon-close": !isOpen }, { "icon-open": isOpen })}>
              </i>
            </a>
          </div>
        </div>
      </div>
    </SongInfoWrapper>
  )
})
