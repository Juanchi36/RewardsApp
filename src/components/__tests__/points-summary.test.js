import React from 'react';
import { render } from '@testing-library/react-native';
import { PointsSummary } from '@components';

describe('pointsSummary', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the component', () => {
    const result = render(<PointsSummary ammount={10000} month="Diciembre" />);

    const container = result.getByTestId('points-summaty-container');

    expect(container).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });
});
