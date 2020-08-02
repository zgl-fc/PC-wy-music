import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height:75px;
  font-size:14px;
  color:#fff;
  background-color:#242424;
  .content {
    height:70px;
    display:flex;
    justify-content:space-between;
  }

  .divider {
    height:5px;
    background-color:#C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display:flex;
  justify-content:space-between;
  .logo {
    display:inline-block;
    width:177px;
    height:70px;
    background-position: 0 -1px;
    text-indent:-9999px;
  }
  .select-item {
    position:relative;
    line-height:70px;
    a {
      display:block;
      color:#ccc;
      padding: 0 19px;
      &:hover, &.active {
        color:#fff;
        text-decoration:none;
      }
      &.active {
        .icon {
          display:block;
          width:12px;
          height:6px;
          position:absolute;
          left:50%;
          bottom:0;
          background-position: -226px 0;
          transform:translate(-50%,0);
        }
      }
    }
    &:last-child {
      a:after {
        content:" ";
        display:block;
        position:absolute;
        top:15px;
        right:-15px;
        width:26px;
        height:13px;
        background-image: url(${require("@/assets/img/sprite_01.png")});
        background-position: -192px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  width:330px;
  padding-right:30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  .search {
    width:158px;
    height:32px;
    border-radius:32px;
    .ant-input {
      font-size:12px;
    }
  }

  a {
    font-size:12px;
  }

  .create-btn {
    width:90px;
    height:32px;
    line-height:32px;
    text-align:center;
    color:#ccc;
    border:1px solid #4f4f4f;
    border-radius:20px;
    &:hover {
      border:1px solid #ccc;
      text-decoration:none;
    }
  }
`