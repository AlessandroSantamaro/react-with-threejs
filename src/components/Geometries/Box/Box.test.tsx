import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Box from './Box';

describe('<Box />', () => {
  test('it should mount', () => {
    render(
      <Box
        position={[0, 0, 0]}
        args={[1, 1, 1]}
      />
    );

    const box = screen.getByTestId('Box');

    expect(box).toBeInTheDocument();
  });
});
