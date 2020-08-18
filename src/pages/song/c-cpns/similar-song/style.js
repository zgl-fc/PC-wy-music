import styled from 'styled-components'

export const SimilarSongWrapper = styled.div`
  .similar-list {
    .similar-item {
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin:10px 0;
      .song-info {
        width:156px;
        p:nth-child(1) {
          color:#333;
        }
        p:nth-child(2) {
          color:#999;
        }
      }
      .btn {
        width:10px;
        height:11px;
      }
      .ply {
        background-position: -69px -455px;
      }
      .add-list {
        background-position: -87px -454px;
      }
    } 
  }
`