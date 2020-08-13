import React, { memo, useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getTopListAction
} from '../../store/actionCreators'

import FCThemeHeaderRcm from '@/components/theme-header-rcm'
import FCTopRanking from '@/components/top-ranking'
import {
  RankingListWrapper
} from './style'
export default memo(function FCRankingList() {
  // redux hooks
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }),shallowEqual)
  
  //hook
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingListWrapper>
      <FCThemeHeaderRcm title={'榜单'}/>
      <div className="tops">
        <FCTopRanking info={state.topOriginList}/>
        <FCTopRanking info={state.topUpList}/>
        <FCTopRanking info={state.topNewList}/>
      </div>
    </RankingListWrapper>
  )
})
