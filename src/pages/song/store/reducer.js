import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:{},
  songInfo:{},
  similarSongs:[],
  similarLists:[],
  lyric:{},
  comments:{}
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
    default:
      return state
  }
}