import styled from 'styled-components'

export const NewAblumWrapper = styled.div`
  .carousel-content {
    position:relative;
    padding-top:30px;
    .albums {
      width:100%;
      border: 1px solid #d3d3d3;
      background-color:#f5f5f5;
      .album-item {
        display:flex !important;
        justify-content:space-between;
        align-items:center;
        height:184px;
        padding:0 20px;
      }
    }
    .arrow {
      position:absolute;
      width:17px;
      height:17px;
    }
    .arrow-prev {
      top:50%;
      left:3px;
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-next {
      top:50%;
      right:3px;
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`