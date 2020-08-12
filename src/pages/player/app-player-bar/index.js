import React, { memo, useRef, useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import classnames from 'classnames'
import { getSizeImage, formatDate, getPlaySong} from '@/utils/format-util';

import { getSongDetailAction } from '../store/actionCreators';

import { Slider } from 'antd';
import {
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator,
  Lock
} from './style'
export default memo(function PlayerBar() {
  // state
  const [currentTime, setcurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false) // 滑动式设置为true
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLock, setIsLock] = useState(false)


  //redux hook
  const { currentSong } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  // other handle 
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知'
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime, "mm:ss")

  // handle function 
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const timeUpdate = (e) => {
    if (!isChanging) {
      setcurrentTime(e.target.currentTime * 1000)
      setProgress(currentTime / duration * 100) //进度是百分比的默认【0，100】
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true) // 滑动时不让滚动条收到播放时间设置
      const tempTime = value / 100 * duration
      setcurrentTime(tempTime)
      setProgress(value)
    },
    [duration],
  )

  const sliderAfterChange = useCallback(
    (value) => {
      const tempTime = value / 100 * duration / 1000
      audioRef.current.currentTime = tempTime // 这里要秒
      setcurrentTime(tempTime * 1000); // 这里要毫秒
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic],
  )

  return (
    <PlayerBarWrapper className="sprite_player" lock={isLock}>
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button className="sprite_player prev"></button>
            <button className="sprite_player play" onClick={e => playMusic()} ></button>
            <button className="sprite_player next"></button>
          </Control>
          <PlayInfo>
            <div className="song-img">
              <img src={getSizeImage(picUrl, 34)} alt="" />
              <a href="#" className="sprite_player mask"></a>
            </div>
            <div className="info-player">
              <div className="song-info">
                <a href="" className="song-name">{currentSong.name}</a>
                <a href="" className="singer-name">{singerName}</a>
              </div>
              <div className="play-progress">
                <Slider defaultValue={30}
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                  tooltipVisible={false}
                />
                <div className="time">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="duration">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator>
            <div className="left">
              <button className="sprite_player add btn"></button>
              <button className="sprite_player share btn"></button>
            </div>
            <div className="right">
              <button className="sprite_player btn volume"></button>
              <button className="sprite_player btn loop"></button>
              <button className="sprite_player btn playlist">8</button>
            </div>
          </Operator>
        </div>
        <div className="hand"></div>
        <audio ref={audioRef} onTimeUpdate={timeUpdate} />
        <Lock className="sprite_player" lock={isLock}>
          <button className="lock-btn sprite_player" onClick={ () => {setIsLock(!isLock)} }></button>
        </Lock>
    </PlayerBarWrapper >
  )
})
