import React, { memo, useState, useEffect, useCallback, Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector, shallowEqual} from 'react-redux'
import {
  getSongInfoAction,
  getLyricAction,
  getCommentsAction,
  getCurrentSongAction
} from './store/actionCreators'

import { Pagination } from 'antd';
import FCComments from '@/components/comments'
import FCSubHeader from '@/components/sub-header'

import SongInfo from './c-cpns/song-info'
import IncludeThisSong from './c-cpns/include-this-song'
import SimilarSong from './c-cpns/similar-song'

import {
  SongWrapper,
  SongLeft,
  SongRight
} from './style'
export default memo(function Song() {
  // props and state
  let { id } = useParams()
  // redux hook
  const { songInfo, lyric, comments } = useSelector((state) => ({
    songInfo: state.getIn(['song', 'songInfo']),
    lyric: state.getIn(['song', 'lyric']),
    comments:state.getIn(['song','comments'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hook
  useEffect(() => {
    dispatch(getSongInfoAction(id))
    dispatch(getLyricAction(id))
    dispatch(getCommentsAction({id}))
  }, [dispatch,id])

  // handle var
  const lyricArr = (lyric && lyric.lines) || []
  const paginationCount = comments.total || 1

  // handle function 
  const paginationChange = useCallback((page, pageSize) => {
    const offset = page - 1
    dispatch(getCommentsAction({id,offset}))
  },[dispatch,id])
  return (
    <SongWrapper>
      <FCSubHeader></FCSubHeader>
      <div className="content wrap-v2">
        <SongLeft>
          <SongInfo songInfo={songInfo} lyricArr={lyricArr}/>
          <FCComments comments={comments}/>
          <Pagination 
            defaultCurrent={1} 
            pageSize={20} 
            total={paginationCount}
            showSizeChanger={false}
            onChange={paginationChange}
            />
        </SongLeft>
        <SongRight>
          <IncludeThisSong id={id} />
          <SimilarSong id={id} />
        </SongRight>
      </div>
    </SongWrapper>
  )
})
