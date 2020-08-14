import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {
  getAlumAction
} from '../../store/actionCreators'

import { Carousel } from 'antd';
import FCThemeHeaderRcm from '@/components/theme-header-rcm'
import FCNewAblum from '@/components/ablum-cover'
import {
  NewAblumWrapper
} from './style'

export default memo(function NewAblum() {

  // redux 
  const state = useSelector(state => ({
    newAblums: state.getIn(["recommend", "newAlbum"])
  }), shallowEqual)
  const dispatch = useDispatch()
  // hooks
  const carouseRef = useRef()
  useEffect(() => {
    dispatch(getAlumAction())
  }, [dispatch])

  return (
    <NewAblumWrapper>
      <FCThemeHeaderRcm title={'新碟上架'}></FCThemeHeaderRcm>
      <div className="carousel-content">
        <div className="albums">
          <Carousel autoplay dots={false} ref={carouseRef}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div className="album-item" key={index}>
                    {
                      state.newAblums.slice(item*5, (item+1)*5).map((item, index) => {
                        return (
                          <FCNewAblum key={item.picId_str} info={item}></FCNewAblum>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
          <a href="javascript:;" className="arrow arrow-prev  sprite_02" onClick={ e => carouseRef.current.prev()}>{''}</a>
          <a href="javascript:;" className="arrow arrow-next  sprite_02" onClick={ e => carouseRef.current.next()}>{''}</a>
        </div>
      </div>
    </NewAblumWrapper>
  )
})
