import styled from 'styled-components'

export const PlayerHeaderWrapper = styled.div`
  display:flex;
  height:41px;
  background:url(${require("@/assets/img/playpanel_bg.png")}) no-repeat;
  text-align:center;
  .left {
    flex:1;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:25px;
    h4 {
      color:#E2E2E2;
      font-size:14px;
    }
    .btns {
      a {
        color:#ccc;
        &:hover{
          color:#e2e2e2;
          .favor {
            background-position: -24px -20px;
          }
          .remove {
            background-position: -51px -20px;
          }
        }
      }
      .col-all {
        margin-right:30px;
      }
      .clear {
        margin-right:20px;
      }
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        position: relative;
        top: 4px;
        right: 4px;
      }

      .favor {
        background-position: -24px 0;
      }

      .remove {
        width: 13px;
        background-position: -51px 0;
      }
    }
  }
  .right {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:50px;
    width:436px;
    .song-name {
      width:346px;
      line-height:41px;
      color:#fff;
    }
    .close {
      width:30px;
      height:30px;
      background-position: -195px 9px;
      cursor:pointer;
      &:hover{
        background-position: -195px -21px;
      }
    }
  }
`