import React, { FC, useRef } from 'react';
import './Torus.module.scss';
import { useFrame } from '@react-three/fiber';

interface TorusProps {
  position: [number, number, number];
  args: [number, number, number, number];
  rotation: {
    x: number;
    y: number;
    z: number;
  }
}

const Torus: FC<TorusProps> = (props) => {
  const ref: any = useRef();
  useFrame((state, delta) => {
    if (ref && ref.current && ref.current.rotation) {
      ref.current.rotation.x += props.rotation.x;
      ref.current.rotation.y += props.rotation.y;
      ref.current.rotation.z += props.rotation.z;
    }
  });
  return (
    <mesh
      ref={ref}
      position={props.position}
    >
      <torusBufferGeometry
        attach="geometry"
        args={props.args}
      />
      <meshStandardMaterial
        color="orange"
        attach="material"
        wireframe
      />
    </mesh>
  );
};

export default Torus;
