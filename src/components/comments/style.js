import styled from 'styled-components'

export const CommentsWrapper = styled.div``

export const InputComment = styled.div`
  .u-title {
    height:35px;
    margin-bottom:20px;
    padding-bottom:2px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      float:left;
      font-size: 20px;
    }
    span {
      float:left;
      color: #666;
      margin:10px 0 0 20px;
    }
  }
  .input-area {
    .head-img {
      float:left;
      img {
        width:50px;
        height:50px;
      }
    }
    .text-area {
      margin-left:65px;
      width:578px;
      textarea {
        width:100%;
        min-height:62px;
        max-height:80px;
        padding:5px 6px;
        border-radius: 2px;
        border: 1px solid #cdcdcd;
        background-color:#fff;
        resize:none;
      }
      .btns {
        padding-top:10px;
        i {
          float:left;
          width:18px;
          height:18px;
          cursor: pointer;
        }
        .emoticon {
          background-position: -40px -490px;
          margin-right:10px;
        }
        .choose {
          background-position: -60px -490px;
        }
        .com-btn {
          float:right;
          width:46px;
          height:25px;
          line-height:25px;
          border-radius:3px;
          text-decoration:none;
          color: #fff;
          text-align:center;
          background-color:#3D8AD2;
          &:hover {
            background-color:#589FE0;
          }
        }
        .com-count {
          float:right;
          margin-right:10px;
          margin-top:4px;
        }
      }
     
    }
  }
`

export const HotComments = styled.div`
  .hot-title {
    margin-top:10px;
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
    h3 {
      font-size:12px;
      color:#333;
      font-weight:700;
    }
  }
     
`

export const CommonComments = styled.div`
  margin-top:20px;
  .com-title {
    position: relative;
    top: 1px;
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
    font-size:12px;
    color:#333;
    font-weight:700;
  }
`