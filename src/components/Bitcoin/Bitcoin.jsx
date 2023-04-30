/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb
Author: FranciscoDugarte (https://sketchfab.com/FranciscoDugarte)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/bitcoin-free-model-551901abb50a4166abdf5f7c92311d37
Title: BITCOIN - FREE MODEL
*/

import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Power1, gsap } from 'gsap';
import { angleToRadians } from '../../utils/ungle';

export function Bitcoin(props) {
  const { nodes, materials } = useGLTF('/models/bitcoin/scene.gltf');
  const bitcoinRef = useRef(null);

  useEffect(() => {
    if (bitcoinRef.current) {
      gsap.to(bitcoinRef.current.rotation, {
        z: angleToRadians(360),
        ease: 'none',
        duration: 9,
        repeat: -1
      });
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        rotation={[angleToRadians(-90), 0, 0]}
        scale={3}
        ref={bitcoinRef}
        position={[0, 0.4, 0]}>
        <mesh geometry={nodes['16783_Zeus_v1_NEW001_oro2_0'].geometry} material={materials.oro2} />
        <mesh
          geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_1'].geometry}
          material={materials.oro2}
        />
        <mesh
          geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_2'].geometry}
          material={materials.oro2}
        />
        <mesh
          geometry={nodes['16783_Zeus_v1_NEW001_oro2_0_3'].geometry}
          material={materials.oro2}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/bitcoin/scene.gltf');
