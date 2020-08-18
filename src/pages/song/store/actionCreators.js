import {
  getSongDetail,
  getSimilarSong,
  getSimilarList,
  getLyric,
  getComments
} from '@/services/song';

import { randomSongIndex } from '@/utils/random-util'
import Lyric from '@/utils/lyric-parser'

import * as actionTypes from './constants'

// 点击列表是否是否
export const isShowPanelAction = (isShowPanel) => ({
  type:actionTypes.IS_SHOW_PANEL,
  isShowPanel
})

// 播放的音乐
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

// 获取songpage的音乐的具体信息 开始命名不好就算了 懒得改了
const changeSongInfoAction = (songInfo) => ({
  type: actionTypes.CHANGE_SONG_INFO,
  songInfo
})

// 设置相似歌曲推介
const changeSimilarSongAction = (similarSongs) => ({
  type: actionTypes.CHANGE_SIMILAR_SONG,
  similarSongs
})

// 相似歌单(包含该歌的歌单)
const changeSimilarListAction = (similarLists) => ({
  type: actionTypes.CHANGE_SIMILAR_LIST,
  similarLists
})

//歌词
const changeLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyric
})

//评论
const changeCommentsAction = (comments) => ({
  type: actionTypes.CHANGE_COMMENTS,
  comments
})

//播放列表
const changeSongListAction = (songList) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changeCurrentLyricAction = (currentLyric) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric
})

// 播放次序 随机啊 顺序啊啥的

export const changePlaySequenceAction = (playSequence) => {
  if (playSequence === 3) playSequence = 0;
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    playSequence
  }
}

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

// 通过上一首下一首的按钮就是通过这个函数 
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取当前的index
    let currentSongIndex = getState().getIn(['song', "currentSongIndex"])
    const playSequence = getState().getIn(['song', 'playSequence'])
    const songList = getState().getIn(['song', 'songList'])
    // 2.判断当前播放列表
    switch (playSequence) {
      case 1:
        currentSongIndex = randomSongIndex(currentSongIndex, songList.length)
        break;
      default:
        currentSongIndex += tag
        if (currentSongIndex === songList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = songList.length - 1
    }
    // 3.处理修改数据
    const currentSong = songList[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(currentSong))
    // 获取当前的歌词,并且解析
    getLyric(currentSong.id).then(res => {
      if (res.lrc) {
        const lyricObj = new Lyric(res.lrc.lyric)
        dispatch(changeCurrentLyricAction(lyricObj))
      }
    })
  }
}

//  在其他页面进行播放时调用这个
export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    const songList = getState().getIn(['song', 'songList'])
    const songIndex = songList.findIndex(song => song.id === ids)
    if (songIndex !== -1) {
      const currentSong = songList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changeCurrentSongAction(currentSong))
    } else {
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        const newSongList = [...songList];
        newSongList.push(song);
        dispatch(changeSongListAction(newSongList));
        // 2.改变当前index
        dispatch(changeCurrentSongIndexAction(newSongList.length - 1));
        dispatch(changeCurrentSongAction(res.songs[0]));
      })
    }
    // 获取当前的歌词,并且解析
    getLyric(ids).then(res => {
      if (res.lrc) {
        const lyricObj = new Lyric(res.lrc.lyric)
        dispatch(changeCurrentLyricAction(lyricObj))
      }
    })
  }
}

export const getSongInfoAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongInfoAction(res.songs[0]));
    })
  }
}

export const getSimilarSongAction = (id) => {
  return dispatch => {
    getSimilarSong(id).then(res => {
      dispatch(changeSimilarSongAction(res.songs))
    })
  }
}

export const getSimilarListAction = (id) => {
  return dispatch => {
    getSimilarList(id).then(res => {
      dispatch(changeSimilarListAction(res.playlists))
    })
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      if (res.lrc) {
        const lyricObj = new Lyric(res.lrc.lyric)
        dispatch(changeLyricAction(lyricObj))
      }
    })
  }
}

export const getCommentsAction = (comment) => {
  return dispatch => {
    getComments(comment).then(res => {
      dispatch(changeCommentsAction(res))
    })
  }
}

export const delSongFromListAction = (index) => {
  return (dispatch, getState) => {
    const songList = getState().getIn(['song', 'songList'])
    const currentSongIndex = getState().getIn(['song', 'currentSongIndex'])
    let newSongList = [...songList]
    newSongList.splice(index, 1)
    if (index === currentSongIndex) {
      //准备播放下一首
      index += 1;
      // 如果当前播放的音乐是最后一首 从0 开始
      if (index == songList.length)
        index = 0;
      const currentSong = songList[index]
      dispatch(changeCurrentSongIndexAction(index))
      dispatch(changeCurrentSongAction(currentSong))
      // 获取当前的歌词,并且解析
      getLyric(currentSong.id).then(res => {
        if (res.lrc) {
          const lyricObj = new Lyric(res.lrc.lyric)
          dispatch(changeCurrentLyricAction(lyricObj))
        }
      })
    } 
    // 如果删除的是后面的需要改变播放的index !!!
    else if(index < currentSongIndex) {
      dispatch(changeCurrentSongIndexAction(currentSongIndex-1))
    }
    dispatch(changeSongListAction(newSongList));
  }
}
