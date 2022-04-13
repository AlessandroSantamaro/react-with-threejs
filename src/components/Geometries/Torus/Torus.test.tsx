import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Torus from './Torus';

describe('<Torus />', () => {
  test('it should mount', () => {
    render(
      <Torus
        position={[0, 0, 0]}
        args={[1, 1, 1, 1]}
        rotation={{x: 0.001, y: 0.001, z: 0.01}}
      />
    );
    
    const torus = screen.getByTestId('Torus');

    expect(torus).toBeInTheDocument();
  });
});
