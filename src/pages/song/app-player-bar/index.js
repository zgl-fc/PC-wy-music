import React, { memo, useRef, useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getSizeImage, formatDate, getPlaySong, throttle } from '@/utils/format-util';

import { 
  getCurrentSongAction, 
  changePlaySongAction,
  changePlaySequenceAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators';

import AppPlayerPanel from '../app-player-panel'
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
  const [showPanel, setShowPanel] = useState(false)


  //redux hook
  const { currentSong, songList, playSequence,currentLyric, currentLyricIndex} = useSelector(state => ({
    currentSong: state.getIn(['song', 'currentSong']),
    songList: state.getIn(['song', 'songList']),
    playSequence: state.getIn(['song', 'playSequence']),
    currentLyric:state.getIn(['song','currentLyric']),
    currentLyricIndex:state.getIn(['song','currentLyricIndex'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getCurrentSongAction(411214279));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    // 一进来进行播放 因为第一次进来不能播放所以catch捕获下
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    });
  }, [currentSong])

  // other handle 
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知'
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, "mm:ss")
  const showCurrentTime = formatDate(currentTime * 1000, "mm:ss")

  // handle function 
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = (e) => {
    // 局部获取currentTime
    const currentTime = e.target.currentTime
    if (!isChanging) {
      setcurrentTime(currentTime)
      setProgress((currentTime * 1000) / duration * 100) //进度是百分比的默认【0，100】
    }
    let curLine = currentLyric.findcurLineIndex && currentLyric.findcurLineIndex(currentTime*1000) - 1
    if( curLine !==  -1){
      dispatch(changeCurrentLyricIndexAction(curLine))
    }
  }

  const timeEnded = () => {
    //播放完的处理
    // 歌单就一首歌或者单曲循环
    if(songList.length === 0)
      return
    if (playSequence === 2 || songList.length === 1) {
      audioRef.current.currntTime = 0
      audioRef.current.play()
    } else {
      // 下一首 tag 一般传1
      dispatch(changePlaySongAction(1))
    }
  }

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true) // 滑动时不让滚动条收到播放时间设置
      const tempTime = value / 100.0 * duration / 1000;
      setcurrentTime(tempTime)
      setProgress(value)
    },
    [duration],
  )

  const sliderAfterChange = useCallback(
    (value) => {
      const tempTime = value / 100 * duration / 1000
      audioRef.current.currentTime = tempTime // 这里要秒
      setcurrentTime(tempTime); // 这里要毫秒
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic],
  )

  const changeSongbyPrevOrNext = useCallback((num) => {
    // 歌单没有歌的时候不准上一首下一首
    if(songList.length === 0) 
      return
    dispatch(changePlaySongAction(num))
  },[songList])

  return (
    <PlayerBarWrapper className="sprite_player" lock={showPanel || isLock}>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"
            onClick={e => changeSongbyPrevOrNext(-1)}
          ></button>
          <button className="sprite_player play" onClick={e => playMusic()} ></button>
          <button className="sprite_player next"
            onClick={e => changeSongbyPrevOrNext(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="song-img">
            <img src={getSizeImage(picUrl, 34)} alt="" />
            <a href={`#/song/${currentSong.id}`} className="sprite_player mask"></a>
          </div>
          <div className="info-player">
            <div className="song-info">
              <a href="" className="song-name">{currentSong.name}</a>
              <a href="" className="singer-name">{singerName}</a>
            </div>
            <div className="play-progress">
              <Slider
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
        <Operator sequence={playSequence}>
          <div className="left">
            <button className="sprite_player add btn"></button>
            <button className="sprite_player share btn"></button>
          </div>
          <div className="right">
            <button className="sprite_player btn volume"></button>
            <button 
              className="sprite_player btn loop"
              onClick={e => dispatch(changePlaySequenceAction(playSequence + 1))}
            ></button>
            <button className="sprite_player btn playlist" onClick={() => setShowPanel(!showPanel)}>{songList.length}</button>
          </div>
        </Operator>
      </div>
      <div className="hand"></div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
      <Lock className="sprite_player" lock={isLock}>
        <button className="lock-btn sprite_player" onClick={() => { setIsLock(!isLock) }}></button>
      </Lock>
      {showPanel && <AppPlayerPanel/>}
    </PlayerBarWrapper >
  )
})
