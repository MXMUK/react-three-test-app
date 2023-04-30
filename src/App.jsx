/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Three } from './components/three';
import { Layout } from './components/Layout';

function App() {
  const [flip, setFlip] = useState(false)

  return (
    <div className="App">
      <Canvas camera={{ position: [5, 0, 10], fov: 40 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 20]} />

        <Suspense fallback={null}>
          <Three isFlipping={flip} onFlip={setFlip} />
        </Suspense>
      </Canvas>

      <Layout onFlip={setFlip} />
    </div>
  );
}

export default App;
