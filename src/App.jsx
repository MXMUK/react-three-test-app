/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Three } from './components/three';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, -1, 10], fov: 35 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 20]} />

        <Suspense fallback={null}>
          <Three />
        </Suspense>
      </Canvas>

      <Layout />
    </div>
  );
}

export default App;
