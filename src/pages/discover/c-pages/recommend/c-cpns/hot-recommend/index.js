import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { 
  getRecommendAction
} from '../../store/actionCreators'

import FCThemeHeaderRcm from '@/components/theme-header-rcm'
import FCThemeCover from '@/components/theme-cover'

import {
  HotRecommendWrapper
} from './style'



export default memo(function FCHotRecommend() {

  // redux hooks
  const state = useSelector(state => ({
    recommends:state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <FCThemeHeaderRcm title={'热门推荐'} keywords={['华语', '流行', '民谣', '摇滚', '电子']} ></FCThemeHeaderRcm>
      <div className="recommend-list">
        {
          state.recommends.slice(0,8).map((item, index) => {
            return (
              <FCThemeCover key={ item.id } info= { item} ></FCThemeCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
