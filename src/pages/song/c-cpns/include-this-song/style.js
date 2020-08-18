import styled from 'styled-components'

export const IncludeThisSongWrapper = styled.div`
  margin-bottom:30px;
  .similar-item {
    display:flex;
    justify-content:space-between;
    margin:10px 0;
    .info {
      width:140px;
      .list-name {
        a {
          font-size:14px;
          color:#000;
        }
      }
      .list-author {
        padding-top:5px;
        span {
          color:#999;
          margin-right:5px;
        }
      }
    }
  }
`