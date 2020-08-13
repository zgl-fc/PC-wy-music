import styled from 'styled-components'

export const ThemeHeaderSmallWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  height:24px;
  width: ${props => props.width};
  margin:0 auto;
  border-bottom: 1px solid #ccc;
  span {
    color:#333;
    font-weight:700;
  }

  a {
    color:#666;
    font-size:12px;
  }
`