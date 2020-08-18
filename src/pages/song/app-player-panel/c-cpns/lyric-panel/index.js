import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import classnames from 'classnames'

import { scrollTo } from "@/utils/ui-helper";

import {
  LyricPanelWrapper
} from './style'
export default memo(function LyricPanel() {

  const { currentLyric, currentLyricIndex } = useSelector(state => ({
    currentLyric: state.getIn(['song', 'currentLyric']),
    currentLyricIndex: state.getIn(['song', 'currentLyricIndex'])
  }), shallowEqual)

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <LyricPanelWrapper>
      <ul className="lrc-content" ref={panelRef}>
        {
          currentLyric.lines.map((item, index) => {
            return (
              <li key={item.time} className={classnames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.txt}
              </li>
            )
          })
        }
      </ul>
    </LyricPanelWrapper>
  )
})
