import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '@components';

describe('button', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the component', () => {
    const result = render(<Button title="A.TITLE" />);

    const button = result.getByTestId('primary-button');
    console.log(button.props.style);

    expect(button).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('should return a blue button', () => {
    const result = render(<Button title="A.TITLE" />);

    const button = result.getByTestId('primary-button');
    console.log(button.props.style);

    expect(button.props.style[0].backgroundColor).toBe('#334ffa');
    expect(result.toJSON()).toMatchSnapshot();
  });
});
