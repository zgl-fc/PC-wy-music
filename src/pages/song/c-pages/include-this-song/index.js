import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSizeImage } from '@/utils/format-util'

import {
  getSimilarListAction
} from '../../store/actionCreators'

import FCThemeHeaderSmall from '@/components/theme-header-small'
import {
  IncludeThisSongWrapper
} from './style'
export default memo(function IncludeThisSong(props) {
  const { id } = props

  const { similarLists } = useSelector(state => ({
    similarLists: state.getIn(['song', 'similarLists'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSimilarListAction(id))
  }, [dispatch, id])

  const isShow = similarLists.length == 0 ? false : true

  return (
    <IncludeThisSongWrapper isShow={isShow}>
      <FCThemeHeaderSmall title="包含这首歌的歌单" width="200px" />
      <ul className="similar-list">
        {
          similarLists.map((item, index) => {
            return (
              <li key={item.id} className="similar-item">
                <a href={`#/playlist?id=${item.id}`}>
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info">
                  <p className="text-nowrap list-name">
                    <a href={`#/playlist?id=${item.id}`}>{item.name}</a>
                  </p>
                  <p className="list-author">
                    <span>by</span>
                    <a href={`#/user/home?id=${item.userId}`}>
                      {item.creator && item.creator.nickname}
                    </a>
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </IncludeThisSongWrapper>
  )
})
