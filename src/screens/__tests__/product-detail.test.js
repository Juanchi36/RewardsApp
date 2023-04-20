import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductDetail } from '@screens';
import { MockContainer } from '@helpers';

const productDetailRouteMock = {
  key: 'home',
  name: 'home',
  params: {
    product: 'A.PRODUCT',
    createdAt: 'A.DATE',
    points: 100,
    image: 'AN.URL',
  },
};

describe('productDetail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the screen', () => {
    const result = render(
      <MockContainer>
        <ProductDetail route={productDetailRouteMock} />
      </MockContainer>
    );

    const screen = result.getByTestId('product-detail-screen');

    expect(screen).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });
});
