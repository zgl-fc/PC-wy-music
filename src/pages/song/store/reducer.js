import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:{},
  playSequence:0,// 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: 0,
  songInfo:{},
  similarSongs:[],
  similarLists:[],
  lyric:{},//歌曲详情页的歌词
  currentLyricIndex: -1,
  comments:{},
  songList:[],
  currentLyric:{},// 播放的歌词
  isShowPanel:false
})

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong',action.currentSong)
    case actionTypes.CHANGE_SONG_INFO:
      return state.set('songInfo',action.songInfo)
    case actionTypes.CHANGE_SIMILAR_SONG:
      return state.set('similarSongs',action.similarSongs)
    case actionTypes.CHANGE_SIMILAR_LIST:
      return state.set('similarLists',action.similarLists)
    case actionTypes.CHANGE_LYRIC:
      return state.set('lyric',action.lyric)
    case actionTypes.CHANGE_COMMENTS:
      return state.set('comments',action.comments)
    case actionTypes.CHANGE_SONG_LIST:
      return state.set('songList',action.songList)
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence',action.playSequence)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex',action.currentSongIndex)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex',action.currentLyricIndex)
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return state.set('currentLyric',action.currentLyric)
    case actionTypes.IS_SHOW_PANEL:
      return state.set('isShowPanel',action.isShowPanel)
    default:
      return state
  }
}