import React, { memo, useEffect, useState, useRef, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight
} from './style'
export default memo(function FCTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0)

  //rudex hook
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  const bannerChange = useCallback(
    (from, to) => {
      setCurrentIndex(to)
    },
    [],
  )

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper  bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <a href="javascript:;" className="control_left" onClick={() => { bannerRef.current.prev() }}></a>
        <a href="javascript:;" className="control_right" onClick={() => { bannerRef.current.next() }}></a>
      </div>
    </BannerWrapper>
  )
})
