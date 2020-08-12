import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  margin-top:15px;
  .singer-list {
    li {
      padding-top:15px;
    }
    .singer-item {
      display:flex;
      width:210px;
      height:62px;
      margin:0 auto;
      text-decoration:none;
      &:hover{
        background: #f4f4f4;
      }
      img {
        width:62px;
        height:62px;
      }
      .info {
        width:147px;
        height:62px;
        padding-top:10px;
        padding-left:14px;
        border: 1px solid #e9e9e9;
        h4 {
          color:#333;
          font-size:14px;
        }
        p {
          color:#666;
        }
      }
    }
  }

  .apply-for {
    margin-top: 12px;
    text-align:center;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: inline-block;
      width:210px;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
    }
  }
`