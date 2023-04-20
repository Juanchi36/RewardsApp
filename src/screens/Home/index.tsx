import React, { FunctionComponent, useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductDetailScreenParams, StackParamList } from '@routing/types';
import { Header, Body, Footer } from './components';
import { filterProductsByRedemption, updatePoints } from '@helpers';
import { ProductService } from '../../services/productService';
import styled from 'styled-components/native';

/**
 * Types
 */

type HomeScreenProps = StackScreenProps<StackParamList, 'Home'>;

export enum ListStatus {
  ALL = 'ALL',
  WON = 'WON',
  REDEEMED = 'REDEEMED',
}

/**
 * Constants
 */

const USER_NAME = 'Ruben Rodriguez';
const productService = ProductService();
const initialState = [
  {
    createdAt: '',
    product: '',
    points: 0,
    image: 'https://picsum.photos/200/300',
    is_redemption: false,
    id: '',
  },
];

/**
 * Styled components
 */

const HomeWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #f6f6f6;
`;

const Separator = styled.View`
  height: 8px;
`;

export const Home: FunctionComponent<HomeScreenProps> = () => {
  const [listStatus, setListStatus] = useState<ListStatus>(ListStatus.ALL);
  const [items, setItems] = useState<ProductDetailScreenParams[]>(initialState);
  const [loading, setLoading] = useState<boolean>(true);

  const productList =
    listStatus === ListStatus.WON
      ? filterProductsByRedemption(items).nonRedemption
      : listStatus === ListStatus.REDEEMED
      ? filterProductsByRedemption(items).redemption
      : items;

  const getProducts = async () => {
    try {
      const result = await productService.getProducts();
      setItems(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <HomeWrapper testID="home-screen">
      <Header title="Bienvenido de vuelta!" userName={USER_NAME} ammount={updatePoints(items)} />
      <Body products={productList} separator={Separator} loading={loading} />
      <Footer {...{ listStatus, setListStatus }} />
    </HomeWrapper>
  );
};
