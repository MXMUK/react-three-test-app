/* eslint-disable react/no-unknown-property */
import {
  Environment,
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Shape
} from '@react-three/drei';
import { angleToRadians } from '../../utils/ungle';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useRef } from 'react';

export const Three = () => {
  const orbitControl = useRef(null);

  useFrame((state) => {
    if (orbitControl.current) {
      // console.log(state.camera);
      // console.log(state.camera.position);
    }

    // state.camera.position.y = false;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 6]} />
      <OrbitControls ref={orbitControl} maxPolarAngle={angleToRadians(89)} />

      {/* ball */}
      <mesh castShadow>
        <sphereGeometry args={[1, 32, 32]} />

        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1}/>
        {/* <meshMatcapMaterial color="#000" /> */}
      </mesh>

      {/* floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} position={[0, -1, 0]} receiveShadow>
        {/* <planeGeometry args={[window.innerWidth, window.innerHeight]} /> */}
        <planeGeometry args={[10, 10]} />

        <meshStandardMaterial color="#cc2293" />
      </mesh>

      <ambientLight args={['#ffffff', 0.25]} />
      {/* <directionalLight args={['#fff', 1]} position={[-3, 5, 0]} castShadow /> */}
      <spotLight
        args={['#ffffff', 4, 8, angleToRadians(45), 0.5]}
        position={[-3, 2, 0]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#cc2293" side={THREE.BackSide} />
        </mesh>
      </Environment>

      {/* <Environment background resolution={64}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Base color="blue" alpha={1} mode="normal" />
            <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment> */}
    </>
  );
};
