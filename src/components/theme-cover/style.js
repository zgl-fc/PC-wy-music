import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
  padding-bottom:30px;
  .img-cover {
    position:relative;
    img {
      width:140px;
      height:140px;
    }
    .mask {
      position:absolute;
      top:0;
      left:0;
      display:block;
      width:140px;
      height:140px;
      background-position:0 0;
    }
    .cover-bottom {
      display:flex;
      justify-content:space-between;
      align-items:center;
      position:absolute;
      width:140px;
      height:27px;
      bottom:0;
      color:#CCC;
      padding: 0 7px;
      background-position:0 -537px;
      .video-views {
        display:flex;
        align-items:center;
        .listen {
          display:inline-block;
          width:14px;
          height:12px;
          background-position:0 -24px;
          margin-right:4px;
          margin-bottom:1px;
        }
      }
      .play {
        display:inline-block;
        width:16px;
        height:17px;
        background-position:0 0;
        &:hover { 
          background-position:0 -60px;
        }
      }
    }
  }

  .img-dec {
    margin-top:8px;
    width:140px;
  }
`