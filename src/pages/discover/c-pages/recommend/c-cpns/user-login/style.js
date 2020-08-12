import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  width:250px;
  height:126px;
  background-position:0 0;
  p {
    margin:0 auto;
    width:205px;
    padding:16px 0;
    color: #666;
  }
  a {
    display:block;
    width:100px;
    height:31px;
    line-height:31px;
    text-align:center;
    margin:0 auto;
    color: #fff;
    text-decoration:none;
    background-position: 0 -195px;
    &:hover {
      background-position: -110px -195px;
    }
  }
`