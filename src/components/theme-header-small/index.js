import React, { memo } from 'react'
import PropsTypes from 'prop-types'

import {
  ThemeHeaderSmallWrapper
} from './style'
const FCThemeHeaderSmall = memo(function (props) {
  const { title, more } = props
  return (
    <ThemeHeaderSmallWrapper>
      <span>{title}</span>
      <a href="/abc">{more}</a>
    </ThemeHeaderSmallWrapper>
  )
})

FCThemeHeaderSmall.propsTypes = {
  title: PropsTypes.string.isRequired,
  more: PropsTypes.string
}

export default FCThemeHeaderSmall;


