import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '@screens';
import { MockContainer } from '@helpers';

describe('home', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the screen', () => {
    const result = render(
      <MockContainer>
        <Home />
      </MockContainer>
    );

    const screen = result.getByTestId('home-screen');

    expect(screen).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });
});
