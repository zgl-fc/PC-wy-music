import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height:172px;
  background-color:#f2f2f2;
  color:#666;
  border-top: 1px solid #d3d3d3;

  .content {
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
`

export const FooterLeft = styled.div`
  .copy {
    padding-top:15px;
    .sep {
      margin-right:14px;
    }
    p {
      line-height:24px;
    }
    .link {
      a {
        color:#999;
      }
      .line {
        margin:0 10px 0 8px;
      }
    }
    .right {
      .police-logo {
        display:inline-block;
        width:14px;
        height:14px;
        background:url(${require('@/assets/img/police.png')}) no-repeat;
        background-size:cover;
        margin-right: 2px;
        vertical-align: -2px;
      }
    }
  }

`

export const FooterRight = styled.div`
  margin-top:33px;
  ul {
    width:420px;
    display:flex;
    justify-content:space-between;
    .unit {
      width:60px;
      height:70px;
      text-align:center;
      .logo-footer {
        display:inline-block;
        width:50px;
        height:45px;
        background:url(${require('@/assets/img/foot_enter_new.png')}) no-repeat;
        background-size:110px 552px;
      }
      span {
        margin:5px;
        display:block;
        width:52px;
        height:14px;
        background:url(${require('@/assets/img/foot_enter_tt.png')}) no-repeat;
        background-size:180px 136px;
      }
      &:nth-child(1) {
        a {
          background-position:-63px -456.5px;
        }
        span {
          width:72px;
          margin-left: -3px;
          margin-top: 4px;
          background-position: 0 -102px;
        }
      }
      &:nth-child(2) {
        a {
         background-position:-63px -102px;
        }
        span {
          background-position: -1px -86px;
        }
      }
      &:nth-child(3) {
        a {
          background-position:0 0;
        }
        span {
          background-position: 0 2px;
        }
      }
      &:nth-child(4) {
        a {
         background-position:-63px -50px;
        }
        span {
          background-position: 0 -52px;
        }
      }
      &:nth-child(5) {
        a{
         background-position:0 -101px;
        }
        span {
          background-position: -1px -70px;
        }
      }
    }

  }

`
