import React, { memo } from 'react'
import PropsTypes from 'prop-types'

import {
  ThemeHeaderSmallWrapper
} from './style'
const FCThemeHeaderSmall = memo(function (props) {
  const { title, more, width= '210px'  } = props
  return (
    <ThemeHeaderSmallWrapper width={width}>
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


