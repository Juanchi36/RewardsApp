import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { formatPoints, formatDate } from '@helpers';

describe('formatPoints', () => {
  it('should return a formatted number', () => {
    const formattedPoints = formatPoints(54000000);

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('54,000,000.00');
  });

  it('should return 0.00 when number is undefined', () => {
    const formattedPoints = formatPoints();

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('0.00');
  });

  it('should return a negative number', () => {
    const formattedPoints = formatPoints(-1200);

    expect(formattedPoints).toBeDefined();
    expect(formattedPoints).toBe('-1,200.00');
  });
});

describe('formatDate', () => {
  it('should formats the date correctly', () => {
    const dateString = '2023-03-11T11:24:20.749Z';
    const expected = '11 de marzo, 2023';
    const actual = formatDate(dateString);

    expect(actual).toEqual(expected);
  });

  it('should render the formatted date correctly', () => {
    const dateString = '2023-03-11T11:24:20.749Z';
    const formattedDate = formatDate(dateString);
    const { getByText } = render(<Text>{formattedDate}</Text>);

    expect(getByText('11 de marzo, 2023')).toBeDefined();
  });
});
