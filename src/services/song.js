import request from './request'

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getSimilarSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}

export function getSimilarList(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}