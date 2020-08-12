import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  HeaderWrapper
} from './style'
const FCThemeHeaderRCM = memo(function index(props) {
  const { title, keywords } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {index === 0? null:(<span className="divider">|</span>)}
                  <a href="todo">{item}</a>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

FCThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

FCThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default FCThemeHeaderRCM


