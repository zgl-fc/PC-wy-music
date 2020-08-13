import styled from 'styled-components'

export const SongWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
    background-color: #fff;
    display: flex;
    border-right: 1px solid #d3d3d3;
  }
`

export const SongLeft = styled.div`
  flex:1;
  padding:47px 30px 40px 39px;
  .song {
    display:flex;
    .song-img {
      position: relative;
      margin-right:30px;
      width:198px;
      height:198px;
      line-height:198px;
      text-align:center;
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
    }
  }
`

export const SongRight = styled.div`
  width:270px;
  padding:20px 40px 40px 30px;
  overflow:hidden;
`