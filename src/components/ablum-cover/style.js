import styled from 'styled-components'

export const AblumCoverWrapper = styled.div`
  width:118px;
  height:150px;
  .ablum-cover {
    position: relative;
    width:100px;
    height:100px;
    img {
      width:100%;
      height:100%;
    }
    .mask {
      position:absolute;
      top:0;
      left:0;
      width:118px;
      height:100px;
      background-position: 0 -570px;
    }
  }
  .ablum-des {
    .sing {
      display:block;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .singer {
      display:block;
      font-size:12px;
      color:#666;
    }
  }
`