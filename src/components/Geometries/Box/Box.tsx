import React, { FC } from 'react';
import './Box.module.scss';

interface BoxProps {
  position: [number, number, number];
  args: [number, number, number];
}
const Box: FC<BoxProps> = (props) => {
  return (
    <mesh
      position={props.position}
    >
      <boxBufferGeometry
        attach="geometry"
        args={props.args}
      />
      <meshNormalMaterial
        attach="material"
      />
    </mesh>
  );
};

export default Box;
