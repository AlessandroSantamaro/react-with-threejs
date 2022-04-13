import { MeshDistortMaterial } from '@react-three/drei';
import React, { FC } from 'react';
import './AnimatedSphere.module.scss';

interface AnimatedSphereProps {
  position: [number, number, number];
  args: [number, number, number];
  distort: number;
  speed: number;
  roughness: number;
}

const AnimatedSphere: FC<AnimatedSphereProps> = (props) => {
  return (

    <mesh
      position={props.position}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={props.args}
      />
      <MeshDistortMaterial
        color="red"
        attach="material"
        distort={props.distort}
        speed={props.speed}
        roughness={props.roughness}
      />
    </mesh>
  )
};

export default AnimatedSphere;
