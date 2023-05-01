/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {
  CubeCamera,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei';
import { angleToRadians } from '../../utils/ungle';
import { Bitcoin } from '../Bitcoin/Bitcoin';
import { useEffect, useRef } from 'react';
import { Power2 } from 'gsap';
import { gsap } from 'gsap';
import Ground from './Ground';

export const Three = ({ isFlipping, onFlip }) => {
  const bitcoinMeshRef = useRef(null);

  const resetAnimation = () => {
    gsap.set(bitcoinMeshRef.current.rotation, { y: 0 });
  };

  useEffect(() => {
    gsap.to(bitcoinMeshRef.current.rotation, {
      y: angleToRadians(360),
      ease: Power2.easeOuteaseOut,
      duration: 1,
      onComplete: resetAnimation
    });

    onFlip(false);
  }, [isFlipping]);

  return (
    <>
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        enableZoom={false}
        enableRotate={false}
        autoRotate
      />

      <PerspectiveCamera makeDefault fov={40} position={[3, 5, 7]} />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <mesh ref={bitcoinMeshRef}>
              <Float speed={1} rotationIntensity={0} floatIntensity={1} floatingRange={[0, 0.2]}>
                <mesh>
                  <Bitcoin isFlipping={isFlipping} onFlip={onFlip} />
                </mesh>
              </Float>
            </mesh>
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[3, 2, 4]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-3, 2, -4]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[-4, 2, 4]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[4, 2, -4]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  );
};
