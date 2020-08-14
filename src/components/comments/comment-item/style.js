import styled from 'styled-components'

export const CommentItemWrapper = styled.div`
  padding:15px 0;
  border-top: 1px dotted #ccc;
  .com-avatar {
    float:left;
  }
  .com-detail {
    margin-left:60px;
    .com-con {
      line-height:20px;
      .com-per {
        color:#0c73c2;
      }
    }
    .hide {
      display:none;
    }
    .reply-before{
      position:relative;
      padding: 8px 19px;
      margin-top: 10px;
      line-height: 20px;
      background: #f4f4f4;
      border: 1px solid #dedede;
      color: #666;
      .reply-name {
        color:#0c73c2;
      }
    }
  }
  .time-reply {
    margin-top:15px;
    text-align: right;
    .time {
      float:left;
      color:#999;
    }
    .like {
      display:inline-block;
      .icon-like {
        float:left;
        margin:2px 5px 0 0;
        width: 15px;
        height: 14px;
        background-position: -150px 0;
      }
    }
    
    .division {
      margin:0 10px;
      color:#ccc;
    }
  }
`