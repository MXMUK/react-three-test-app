/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const Container = styled.div`
  font-size: 14px;
  scroll-snap-align: center;
  
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 3vw;
  left: 3vw;
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 3vw;
  left: 3vw;
  width: 30ch;
  max-width: 40%;
  z-index:1;
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  z-index:1;
`;

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
`;

export default function AboutUs({ onFlip }) {
  return (
    <Container>
      <TopLeft>
        <h1>ADVANCED DIGITAL PRODUCTS</h1>
        <p>In React & Threejs —</p>
      </TopLeft>

      <BottomLeft>
        <button onClick={() => onFlip(true)}>flip</button>
      </BottomLeft>

      <BottomRight>
        If you have a UI designer and you only need high-quality research of user experience and a
        strategy based on them, we are ready to provide you understand the market, competitors,
        users and requirements for designing of the future product.
      </BottomRight>

      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  );
}
