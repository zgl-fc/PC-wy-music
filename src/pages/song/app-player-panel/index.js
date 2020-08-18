import React, { memo } from 'react'

import PlayerHeader from './c-cpns/player-header'
import PlayList from './c-cpns/play-list'
import LyricPanel from './c-cpns/lyric-panel'

import {
  AppPlayerPanelWrapper
} from './style'
export default memo(function AppPlayerPanel() {
  return (
    <AppPlayerPanelWrapper>
      <PlayerHeader/>
      <div className="main">
        <PlayList/>
        <LyricPanel/>
      </div>
    </AppPlayerPanelWrapper>
  )
})
