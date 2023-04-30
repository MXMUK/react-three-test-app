/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Float, MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei';
import { angleToRadians } from '../../utils/ungle';
import { Bitcoin } from '../Bitcoin/Bitcoin';
import { useEffect, useRef } from 'react';
import { Power2 } from 'gsap';
import { gsap } from 'gsap';

export const Three = ({ isFlipping, onFlip }) => {
  const bitcoinMeshRef = useRef(null);

  const resetAnimation = () => {
    gsap.set(bitcoinMeshRef.current.rotation, { y: 0 });
  };

  useEffect(() => {
    if (isFlipping) {
      gsap.to(bitcoinMeshRef.current.rotation, {
        y: angleToRadians(360),
        ease: Power2.easeOuteaseOut,
        duration: 1,
        onComplete: resetAnimation
      });

      onFlip(false);
    }
  }, [isFlipping]);

  return (
    <>
      <PresentationControls
        speed={1.5}
        rotation={[angleToRadians(30), 0, 0]}
        polar={[angleToRadians(10), 0]}
        zoom={0.7}>
        <Stage adjustCamera={3} environment="city" intensity={0.6} castShadow={false}>
          <Float speed={1} rotationIntensity={0} floatIntensity={1} floatingRange={[0, 0.1]}>
            <mesh rotation={[0, 0, 0]} ref={bitcoinMeshRef}>
              <Bitcoin isFlipping={isFlipping} onFlip={onFlip} />
            </mesh>
          </Float>
        </Stage>

        {/* floor */}
        <mesh rotation={[angleToRadians(-90), 0, 0]} position={[0, -0.9, 0]}>
          <planeGeometry args={[100, 100]} />

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
