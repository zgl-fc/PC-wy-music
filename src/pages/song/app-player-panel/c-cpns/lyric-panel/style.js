import styled from 'styled-components'

export const LyricPanelWrapper = styled.div`
  width:433px;
  height:261px;
  background-color:#1A1A1A;
  .lrc-content {
    margin:20px 0;
    height:221px;
    overflow: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    
    .lrc-item {
      height: 32px;
      text-align:center;
      color:#989898;
      &.active {
        font-size:14px;
        color:#fff;
      }
    }
  }
  
`