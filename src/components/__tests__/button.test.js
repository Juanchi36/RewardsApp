import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '@components';

describe('button', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the component', () => {
    const result = render(<Button title="A.TITLE" handlePress={() => jest.fn()} />);

    const button = result.getByTestId('primary-button');

    expect(button).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('should return a blue button', () => {
    const result = render(<Button title="A.TITLE" isASingleButton={true} />);

    const button = result.getByTestId('primary-button');

    expect(button.props.style.backgroundColor).toBe('#334ffa');
    expect(result.toJSON()).toMatchSnapshot();
  });
});
