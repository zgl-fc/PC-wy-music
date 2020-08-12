import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    height:285px;
    display:flex;
    position:relative;
    .control_left, .control_right {
      display:block;
      position:absolute;
      width:37px;
      height:63px;
      top:50%;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .control_left {
      left:-68px;
      background-position: 0 -360px;
    }
    .control_right {
      right:-68px;
      background-position: 0 -508px;
    }
  }
  
`
export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
     height:285px;
     .image {
      width:auto;
      height:285px;
      }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width:254px;
  height:285px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`

`

