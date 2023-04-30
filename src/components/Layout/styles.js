import styled from 'styled-components'

export const Container = styled.div`
  font-size: 14px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 3vw;
  left: 3vw;
`

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 3vw;
  width: 30ch;
  max-width: 40%;
`

export const BottomRight = styled.div`
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`

export const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 3vw;
  right: 3vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #fff;
    margin-bottom: 6px;
  }
`
