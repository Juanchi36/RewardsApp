import React, { FunctionComponent, useState } from 'react';
import { Header, Body, Footer } from './components';
import { filterProductsByRedemption } from '@helpers';
import styled from 'styled-components/native';

/**
 * Types
 */

export enum ListStatus {
  ALL = 'ALL',
  WON = 'WON',
  REDEEMED = 'REDEEMED',
}

/**
 * Constants
 */

const USER_NAME = 'Ruben Rodriguez';
// TODO: remove the following mock when implementing the API call
export const productsMock = [
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
    is_redemption: true,
    id: '2',
  },
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
    is_redemption: true,
    id: '2',
  },
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
];

/**
 * Styled components
 */

const HomeWrapper = styled.View`
  flex: 1;
  background-color: #f6f6f6;
`;

const Separator = styled.View`
  height: 8px;
`;

export const Home: FunctionComponent = () => {
  const [listStatus, setListStatus] = useState<ListStatus>(ListStatus.REDEEMED);

  const products =
    listStatus === ListStatus.WON
      ? filterProductsByRedemption(productsMock).nonRedemption
      : listStatus === ListStatus.REDEEMED
      ? filterProductsByRedemption(productsMock).redemption
      : productsMock;

  return (
    <HomeWrapper>
      <Header title="Bienvenido de vuelta!" userName={USER_NAME} />
      <Body products={products} separator={Separator} />
      <Footer {...{ listStatus, setListStatus }} />
    </HomeWrapper>
  );
};
