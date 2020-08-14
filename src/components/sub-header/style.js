import styled from 'styled-components'

export const SubHeaderWrapper = styled.div`
  height:34px;
   background-color:#C20C0C;
   border-bottom: 1px solid #a40011;
   ul {
    display:flex;
    justify-content:space-between;
    width:564px;
    box-sizing:content-box;
    padding-right:173px;
    .nav-item {
      a {
        display:inline-block;
        height:20px;
        padding:0 13px;
        margin:7px 17px 0;
        color:#FFFFFF;
      }
      a:hover, a.active {
        border-radius:20px;
        background-color:#9B0909;
        text-decoration:none;
      }
    }
   }
`