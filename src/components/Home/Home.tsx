import React, { FC, Suspense } from 'react';
import styles from './Home.module.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from '../Geometries/Box/Box';
import AnimatedSphere from '../Geometries/AnimatedSphere/AnimatedSphere';
import TeddyBear from '../Geometries/TeddyBear/TeddyBear';
import Star from '../Geometries/Star/Star';
import * as THREE from 'three';
import Torus from '../Geometries/Torus/Torus';

interface HomeProps {
}

const Home: FC<HomeProps> = () => {
  const addStar = (index: number) => {
    const position: any = Array(3).fill('').map(() => THREE.MathUtils.randFloatSpread(100));
    return <Star
      key={index}
      position={position}
      args={[0.25, 24, 24]}
    />
  };
  const starArray = Array(100).fill('').map((value, index) => {
    return addStar(index)
  });

  return (
    <div className={styles.Home} data-testid="Home">
      <h1>React App with ThreeJS examples</h1>

      <Canvas
        camera={{position: [10, 10, 1]}}
      >
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
        <ambientLight
          intensity={0.5}
        />
        <directionalLight
          position={[-2, 5, 2]}
        />

        {/* Show 3d models */}
        <Suspense
          fallback={null}
        >
          {starArray}

          <Box
            position={[6, 5, 6]}
            args={[3, 3, 3]}
          />

          <AnimatedSphere
            position={[-6, 2, 3]}
            args={[2, 100, 200]}
            distort={0.3}
            speed={2}
            roughness={0}
          />

          <TeddyBear/>

          <Torus
            position={[0, 4, -6]}
            args={[3, 1, 30, 30]}
            rotation={{x: 0.001, y: 0.001, z: 0.01}}
          />
        </Suspense>

        <gridHelper
          args={[20, 20]}
        />
      </Canvas>
    </div>
  )
};

export default Home;
