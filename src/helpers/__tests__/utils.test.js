import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { formatPoints, formatDate, updatePoints, filterProductsByRedemption } from '@helpers';

const productsMock = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T17:02:51.904Z',
    product: 'Recycled Plastic Tuna',
    points: 92984,
    image: 'https://loremflickr.com/640/480/city',
    is_redemption: false,
    id: '2',
  },
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: true,
    id: '1',
  },
];

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

describe('updatePoints', () => {
  it('should adds points for is_redemption false and subtracts for true', () => {
    const sum = updatePoints(productsMock);

    expect(sum).toBe(92984);
  });
});

describe('filterProductsByRedemption', () => {
  it('should returns an object with arrays of redemption and non-redemption items', () => {
    const filteredProducts = filterProductsByRedemption(productsMock);

    expect(filteredProducts.redemption).toEqual([
      {
        createdAt: '2022-12-09T06:34:25.607Z',
        product: 'Handmade Metal Shoes',
        points: 16434,
        image: 'https://loremflickr.com/640/480/technics',
        is_redemption: true,
        id: '1',
      },
    ]);
    expect(filteredProducts.nonRedemption).toEqual([
      {
        createdAt: '2022-12-09T06:34:25.607Z',
        product: 'Handmade Metal Shoes',
        points: 16434,
        image: 'https://loremflickr.com/640/480/technics',
        is_redemption: false,
        id: '1',
      },
      {
        createdAt: '2022-12-09T17:02:51.904Z',
        product: 'Recycled Plastic Tuna',
        points: 92984,
        image: 'https://loremflickr.com/640/480/city',
        is_redemption: false,
        id: '2',
      },
    ]);
  });
});
