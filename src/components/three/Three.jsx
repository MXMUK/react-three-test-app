/* eslint-disable react/no-unknown-property */
import {
  Environment,
  Float,
  GradientTexture,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Shape,
  Stage,
  useTexture
} from '@react-three/drei';
import { angleToRadians } from '../../utils/ungle';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useEffect, useRef } from 'react';
import gsap, { Circ, Expo, Power1 } from 'gsap';
import { Bitcoin } from '../Bitcoin/Bitcoin';

export const Three = () => {
  // const orbitControl = useRef(null);

  useEffect(() => {
    // if (ballRef.current) {
    //   console.log(ballRef.current);
    //   gsap.to(ballRef.current.position, {
    //     y: 0.5,
    //     ease: Power1.easeInOut,
    //     duration: 4,
    //     repeat: -1,
    //     yoyo: true
    //   });
    // }
  }, []);

  return (
    <>
      <PresentationControls
        speed={1.5}
        rotation={[angleToRadians(30), 0, 0]}
        polar={[angleToRadians(10), 0]}>
           

        <Stage adjustCamera={1} environment="city" intensity={0.6} castShadow={false}>
          <Float speed={1} rotationIntensity={0} floatIntensity={1} floatingRange={[0, 0.1]}>
            <Bitcoin />
          </Float>
        </Stage>

        {/* floor */}
        <mesh rotation={[angleToRadians(-90), 0, 0]} position={[0, -0.9, 0]}>
          <planeGeometry args={[170, 170]} />

          <MeshReflectorMaterial
            blur={[700, 700]}
            resolution={1048}
            mixBlur={1}
            mixStrength={100}
            depthScale={2}
            minDepthThreshold={0.5}
            maxDepthThreshold={1.5}
            color="#171917"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};
