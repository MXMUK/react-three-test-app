/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import './App.css';
import { CoinScene } from './components/CoinScene/CoinScene';
import { Works } from './components/Works/Works';
import styled from 'styled-components';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  const [flip, setFlip] = useState(false);

  const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    background: linear-gradient(90deg, blue, black, purple);
    font-family: 'Pathway Extreme', sans-serif;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    color: white;
  `;

  return (
    <Container className="App">
      <AboutUs onFlip={setFlip} />
      <CoinScene isFlip={flip} onFlip={setFlip} />
      <Works />
    </Container>
  );
}

export default App;
