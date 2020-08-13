import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:{},
  songInfo:{},
  similarSongs:[],
  similarLists:[]
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
    default:
      return state
  }
}