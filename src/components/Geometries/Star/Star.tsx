import React, { FC } from 'react';
import './Star.module.scss';

interface StarProps {
  key: number;
  position: [number, number, number];
  args: [number, number, number];
}

const Star: FC<StarProps> = (props) => {
  return (
    <mesh
      position={props.position}
    >
      <sphereBufferGeometry
        attach="geometry"
        args={props.args}
      />
      <meshLambertMaterial
        color="yellow"
        attach="material"
      />
    </mesh>
  )
};

export default Star;
