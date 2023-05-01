/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Three } from '../three';

const Section = styled.div`
  height: 100vh;
  width: 100%;
  transform: translate(0, 50%);
`;

export const CoinScene = ({ isFlip, onFlip }) => {
  return (
    <>
      <Section>
        <Canvas>
          <Suspense fallback={null}>
            <mesh>
              <Three isFlipping={isFlip} onFlip={onFlip} />
            </mesh>
          </Suspense>
        </Canvas>
      </Section>
    </>
  );
};
