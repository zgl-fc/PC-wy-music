import styled from 'styled-components'

export const SongInfoWrapper = styled.div`
  display:flex;
  .song-img {
    position: relative;
    margin-right:30px;
    width:198px;
    height:198px;
    line-height:198px;
    text-align:center;
    img {
      height:131px;
    }
    .mask {
      position:absolute;
      top:-4px;
      left:-4px;
      width:206px;
      height:205px;
      background-position: -140px -580px;
    }
  }
  .song-detail {
    .header {
      .lab {
        float:left;
        margin-top:6px;
        width:54px;
        height:24px;
        background-position: 0 -463px;
      }
      .tit {
        margin-left:64px;
        .main-tit {
          font-size:24px;
          color:#333;
        }
        .sub-tit {
          font-size:14px;
          color:#BABABA;
        }
      }
    }
    .des {
      margin:10px 0;
      color:#999;
      a {
        color:#0c73c2;
      }
    }
    .song-btn {
      display:flex;
      justify-content:space-between;
      width:400px;
      a {
        display:inline-block;
        width:59px;
        height:31px;
        line-height:31px;
        border:1px solid #C1C4C4;
        border-radius:10px;
        text-decoration:none;
        background-color:#FAFAFA;
        &:hover {
          background-color:#FFFFFF;
        }
        i {
          float:left;
          width:16px;
          height:16px;
          margin:7px 5px 0 4px;
        }
      }
      .play {
        display:flex;
        .ply {
          background-color:#3D8AD2;
          width:70px;
          border:none;
          color:#fff;
          &:hover {
            background-color:#589FE0;
          }
          .ico-ply {
            float:left;
            width:20px;
            height:18px;
            margin: 6px 4px 2px 7px;
            border-radius: 18px;
            background-position: -28px -1622px;
          }
        }
        .add-list {
          width:31px;
          height:31px;
          border:none;
          font-size:18px;
          text-align:center;
          color:#fff;
          background-color:#3D8AD2;
          &:hover {
            background-color:#589FE0;
          }
        }
      }
      .icon-col {
        background-position:-9px -1070px;
      }
      .icon-sha {
        background-position:-9px -1275px;
      }
      .icon-down {
        background-position:-9px -2812px;
      }
      .com-count {
        width:77px;
        font-size:14px;
        span {
          font-size:12px;
        }
        .icon-com {
          background-position:-9px -1515px;
        }
      }
    }
    .lyric-content {
      margin-top: 13px;
      line-height: 23px;
      .hide {
        display:none;
      }
      .col {
        a {
          color:#0c73c2;
        }
        i {
          display:inline-block;
          width: 11px;
          height: 8px;
        }
        .icon-close {
          background-position: -65px -520px;
        }
        .icon-open {
          background-position: -45px -520px;
        }
      }
    }
  }
`