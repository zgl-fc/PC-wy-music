import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ABLUM,
  CHANGE_UP_LIST,
  CHANGE_NEW_LIST,
  CHANGE_ORGIN_LIST,
  CHANGE_ARTIST_LIST
} from './constants'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners
});

const changeRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  recommends: res.result
})

const changeAblumAction = ( res ) => ({
  type:CHANGE_NEW_ABLUM,
  newAlbum: res.albums
})

const changeUpListAction = ( res ) => ({
  type:CHANGE_UP_LIST,
  topUpList:res.playlist
})

const changeNewListAction = ( res ) => ({
  type:CHANGE_NEW_LIST,
  topNewList:res.playlist
})

const changeOriginListAction = ( res ) => ({
  type:CHANGE_ORGIN_LIST,
  topOriginList:res.playlist
})

const changeArtistListAction = ( res ) => ({
  type:CHANGE_ARTIST_LIST,
  artistList:res.artists
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getRecommendAction = (res) => {
  return dispatch => {
    getHotRecommend().then((res) => {
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getAlumAction = () => {
  return dispatch => {
    getNewAlbum(10, 0).then((res) => {
      dispatch(changeAblumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then((res) => {
      switch(idx) {
        case 0:
          dispatch(changeUpListAction(res))
          break;
        case 2:
          dispatch(changeNewListAction(res))
          break;
        case 3:
          dispatch(changeOriginListAction(res))
          break;
        default:
          return 0;
      }
    })
  }
}

export const getArtistListAction = () => {
  return dispatch => {
    getArtistList(5,5001).then((res) => {
      dispatch(changeArtistListAction(res))
    })
  }
}


