import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  height: 261px;
  width: 553px;
  overflow: hidden;
  background-color:#161616;
  .list {
    height: 261px;
    padding-bottom:10px;
    overflow: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    .song-item {
      display:flex;
      align-items:center;
      height:28px;
      .play {
        margin-left:10px;
        width:10px;
        height:13px;
      }
      .songName {
        padding-left:10px;
        width:266px;
        color:#ccc;
      }
      .icons {
        padding-left:10px;
        width:110px;
        height:28px;
        .ico {
          float: right;
          height:16px;
          overflow: hidden;
          margin: 7px 0 0 10px;
          text-indent: -9999px;
        }
      }
      .singer {
        padding-left:10px;
        width:70px;
        color:#9b9b9b;
      }
      .duration {
        padding-left:10px;
        width:45px;
        color:#666;
      }
      &.is-playing, &:hover {
        .col {
          color:#fff;
        }
      }
      &.is-playing {
        .play {
          background-position: -182px 0;
        }
      }
      &:hover {
        .icn-del {
          width: 13px;
          background-position: -51px 0;
          &:hover {
            background-position: -51px -20px;
          }
        }
        .ico-dl {
          width: 14px;
          background-position: -57px -50px;
          &:hover {
            background-position: -80px -50px;
          }
        }
        .ico-share {
          width: 14px;
          background-position: 0 0;
          &:hover {
            background-position: 0 -20px;
          }
        }
        .ico-add {
          width: 16px;
          background-position: -24px 0;
          &:hover {
            background-position: -24px -20px;
          }
        }
      }
    }
  }
`