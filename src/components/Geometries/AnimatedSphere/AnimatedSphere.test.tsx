import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimatedSphere from './AnimatedSphere';

describe('<AnimatedSphere />', () => {
  test('it should mount', () => {
    render(
      <AnimatedSphere
        position={[0, 0, 0]}
        args={[1, 1, 1]}
        distort={0.3}
        speed={2}
        roughness={0}
      />
    );

    const animatedSphere = screen.getByTestId('AnimatedSphere');

    expect(animatedSphere).toBeInTheDocument();
  });
});
