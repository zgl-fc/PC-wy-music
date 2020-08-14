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

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

export function getComments({id,offset=0,limit=20}) {
  offset = limit*offset
  return request({
    url: "/comment/music",
    params: {
      id,
      offset,
      limit
    }
  })
}