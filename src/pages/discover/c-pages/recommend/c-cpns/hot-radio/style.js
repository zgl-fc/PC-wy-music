import styled from 'styled-components'

export const HotRadioWrapper = styled.div`
  margin-top:30px;
  .radios-list {
    .radio-item {
      display:flex;
      justify-content:space-between;
      width:210px;
      height:50px;
      margin:0 auto;
      margin-top:10px;
      a {
        img {
        width:40x;
        height:40px;
        }
      }
      .info {
        width:160px;
        a {
          position:relative;
          color:#000;
          &:after {
            content:'';
            position:absolute;
            width:11px;
            height:13px;
            top:0px;
            right:-15px;
            background: url(${require('@/assets/img/sprite_icon2.png')}) no-repeat 0 9999px;
            background-position:0 1px;
         }
        }
      }
    }
  }
`