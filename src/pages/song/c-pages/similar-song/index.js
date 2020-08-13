import React, { memo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {
  getSimilarSongAction
} from '../../store/actionCreators'

import FCThemeHeaderSmall from '@/components/theme-header-small'
import {
  SimilarSongWrapper
} from './style'
export default memo(function SimilarSong(props) {
  // props and state
  const { id } = props

  // redux 
  const { similarSongs } = useSelector(state => ({
    similarSongs:state.getIn(['song','similarSongs'])
  }),shallowEqual)
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    dispatch(getSimilarSongAction(id))
  }, [dispatch])

  // handle function 
  const singerName = useCallback(
    (item) => {
      return ((item.artists && item.artists[0].name) || '')
    },
    [],
  )
  
  return (
    <SimilarSongWrapper>
      <FCThemeHeaderSmall title="相似歌曲" width="200px"/>
      <ul className="similar-list">
        {
          similarSongs.map((item,index) => {
            return (
              <li key={item.id} className="similar-item">
                <div className="song-info">
                  <p>{item.name}</p>
                  <p>{singerName(item)}</p>
                </div>
                <a href="" className="ply btn sprite_btn"></a>
                <a href="" className="add-list btn sprite_btn"></a>
              </li>
            )
          })
        }
      </ul>
    </SimilarSongWrapper>
  )
})
