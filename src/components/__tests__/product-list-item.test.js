import React from 'react';
import { render } from '@testing-library/react-native';
import { ProductListItem } from '@components';

describe('productListItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a snapshot of the component', () => {
    const result = render(
      <ProductListItem
        imageUrl="AN.URL"
        productName="A.NAME"
        date="A.DATE"
        points={100}
        isRedemption={false}
      />
    );

    const item = result.getByTestId('product-item');

    expect(item).toBeDefined();
    expect(result.toJSON()).toMatchSnapshot();
  });

  it('should render a redemtion item', () => {
    const result = render(
      <ProductListItem
        imageUrl="AN.URL"
        productName="A.NAME"
        date="A.DATE"
        points={100}
        isRedemption={true}
      />
    );

    const sign = result.getByTestId('product-item-sign');

    expect(sign.props.style[0].color).toBe('#FF0000');
    expect(result.toJSON()).toMatchSnapshot();
  });
});
