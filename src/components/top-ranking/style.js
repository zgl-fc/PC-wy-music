import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  .top-list-item {
    .header {
      display:flex;
      padding-left:19px;
      padding-top:20px;
      width:230px;
      height:120px;
      .header-image {
        position:relative;
        width:80px;
        height:80px;
        a {
          width:80px;
          height:80px;
        }
      }
      .header-title {
        margin-left:10px;
        margin-top:6px;
        a {
          display:block;
          color:#333;
          font-size:14px;
          font-weight:700;
        }
        .btn {
          margin-top:10px;
          a {
            display:inline-block;
            width:22px;
            height:22px;
            margin-right:10px;
          }
          .play {
            background-position: -267px -205px;
            &:hover {
              background-position: -267px -235px;
            }
          }
          .collect {
            background-position: -300px -205px;
            &:hover {
              background-position: -300px -235px;
            }
          }
        }
      }
    }
    .top-item {
      display:flex;
      height:32px;
      width:220px;
      line-height:32px;
      padding-left:12px;
      .no {
        display:inline-block;
        width:35px;
        height:32px;
        font-size:16px;
        text-align:center;
        color:#666;
      }
      .top-3 {
        color:#c10d0c;
      }
      .song {
        flex:1;
        display: inline-block;
      }
      &:hover {
        .opr {
          display:flex;
        }
      }
      .opr {
        display:none;
        align-items:center;
        width:83px;
        a {
          display:inline-block;
          width:17px;
          height:17px;
          margin-right:10px;
          text-indent:-9999px;
        }
        .top-play {
          background-position: -267px -268px;
          &:hover {
            background-position: -267px -288px;
          }
        }
        .top-add {
          width:13px;
          height:13px;
          background-position: 0 -700px;
          &:hover {
            background-position: -22px -700px;
          }
        }
        .top-collect {
          background-position: -297px -268px;
          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
  }
  .more {
    height:32px;
    line-height:32px;
    text-align:right;
    margin-right:32px;
  }
`