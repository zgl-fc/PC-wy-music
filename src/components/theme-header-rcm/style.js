import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  height:35px;
  border-bottom:2px solid #C10D0C;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  .left {
    display:flex;
    .title {
      font-size:20px;
      margin-right:20px;
    }
    .keywords {
      display:flex;
      align-items:center;
      .item {
        .divider {
          margin:0 10px;
          color:#ccc;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display:block;
      width:12px;
      height:12px;
      background-position:0 -240px;
    }
  }
`