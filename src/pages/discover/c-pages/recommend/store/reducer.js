import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  artistList: []
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.recommends)
    case actionTypes.CHANGE_NEW_ABLUM:
      return state.set('newAlbum', action.newAlbum)
    case actionTypes.CHANGE_UP_LIST:
      return state.set('topUpList', action.topUpList)
    case actionTypes.CHANGE_NEW_LIST:
      return state.set('topNewList', action.topNewList)
    case actionTypes.CHANGE_ORGIN_LIST:
      return state.set('topOriginList', action.topOriginList)
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList', action.artistList)
    default:
      return state
  }
}

export default reducer;