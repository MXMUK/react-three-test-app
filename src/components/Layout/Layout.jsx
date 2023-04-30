/* eslint-disable react/prop-types */
import './style.css';
import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles';

export const Layout = ({ onFlip }) => {
  return (
    <Container>
      <TopLeft>
        <h1>ADVANCED DIGITAL PRODUCTS</h1>
        <p>In React & Threejs —</p>
      </TopLeft>

      <BottomLeft>
        <button onClick={() => onFlip(true)} >flip</button>
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
};
