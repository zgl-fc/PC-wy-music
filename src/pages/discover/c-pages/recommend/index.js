import React, { memo } from 'react'

import FCTopBanner from './c-cpns/top-banner'

import FCHotRecommend from './c-cpns/hot-recommend'
import FCNewAblum from './c-cpns/new-ablum'
import FCRankingList from './c-cpns/ranking-list'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotRadio from './c-cpns/hot-radio'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'

export default memo(function FCRecommend() {
  return (
    <RecommendWrapper>
      <FCTopBanner></FCTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft >
          <FCHotRecommend/>
          <FCNewAblum/>
          <FCRankingList/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
          <SettleSinger/>
          <HotRadio/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
