import { 
  getSongDetail,
  getSimilarSong,
  getSimilarList
} from '@/services/song';

import * as actionTypes from './constants'

// 获取播放的音乐 开始命名不好就算了
const changeSongDetailAction = (currentSong) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

// 获取音乐的具体信息 开始命名不好就算了 懒得改了
const changeSongInfoAction = (songInfo) => ({
  type:actionTypes.CHANGE_SONG_INFO,
  songInfo
})

// 设置相似歌曲推介
const changeSimilarSongAction = (similarSongs) => ({
  type:actionTypes.CHANGE_SIMILAR_SONG,
  similarSongs
})

// 相似歌单(包含该歌的歌单)
const changeSimilarListAction = (similarLists) => ({
  type:actionTypes.CHANGE_SIMILAR_LIST,
  similarLists
})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res.songs[0]));
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
