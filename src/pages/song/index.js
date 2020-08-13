import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSizeImage } from '@/utils/format-util'

import {
  getSongInfoAction
} from './store/actionCreators'

import IncludeThisSong from './c-pages/include-this-song'
import SimilarSong from './c-pages/similar-song'

import {
  SongWrapper,
  SongLeft,
  SongRight
} from './style'
export default memo(function Song() {
  // props and state
  let { id } = useParams()

  // redux hook
  const { songInfo } = useSelector((state) => ({
    songInfo: state.getIn(['song', 'songInfo'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getSongInfoAction(id))
  }, [dispatch])

  // handle var
  const picUrl = songInfo.al && songInfo.al.picUrl
  const singerName = (songInfo.ar && songInfo.ar[0].name) || '不知道谁唱的'
  const album = (songInfo.al && songInfo.al.name) || '不知道'

  return (
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft>
          <div className="song">
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
                  <a href="javascript:;" className="ply sprite_button"><i className="ico-ply sprite_button"></i>播放</a>
                  <a href="javascript:;" title="添加到播放列表" className="add-list">+</a>
                </div>
                <a href="javascript:;"><i className="icon-col sprite_button"></i>收藏</a>
                <a href="javascript:;"><i className="icon-sha sprite_button"></i>分享</a>
                <a href="javascript:;"><i className="icon-down sprite_button"></i>下载</a>
                <a href="javascript:;" className="com-count"><i className="icon-com sprite_button"></i> (<span>38812</span>)</a>
              </div>
            </div>
          </div>
        </SongLeft>
        <SongRight>
          <IncludeThisSong id={id}/>
          <SimilarSong id={id}/>
        </SongRight>
      </div>
    </SongWrapper>
  )
})
