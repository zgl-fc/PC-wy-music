import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-util'
import {
  AblumCoverWrapper
} from './style'
export default memo(function FCAblumCover(props) {
  const { info } = props
  return (
    <AblumCoverWrapper>
      <div className="ablum-cover">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a className="mask sprite_covor" href={`#/ablum?id=${info.id}`}>{''}</a>
      </div>
      <div className="ablum-des">
        <a href={`#/ablum?id=${info.id}`} className="sing">{info.name}</a>
        <a href={`#/artist?id=${info.artist.id}`} className="singer"> {info.artist.name}</a>
      </div>
    </AblumCoverWrapper>
  )
})
