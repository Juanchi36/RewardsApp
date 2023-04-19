import React, { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductDetailScreenParams, StackParamList } from '@routing/types';
import { ProductListItem } from '@components';
import { formatDate } from '@helpers';
import styled, { DefaultTheme } from 'styled-components/native';
import { StyledComponent } from 'styled-components';

/**
 * Types
 */

interface BodyProps {
  products: Pick<
    ProductDetailScreenParams,
    'product' | 'createdAt' | 'points' | 'is_redemption' | 'id' | 'image'
  >[];
  separator: StyledComponent<typeof View, DefaultTheme, {}, never>;
}

/**
 * Styled components
 */

const BodyWrapper = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

const ListWrapper = styled.View`
  margin-top: 20px;
  padding-vertical: 20px;
  padding-horizontal: 15px;
  background-color: #fff;
  max-height: 86%;
  border-radius: 10px;
`;

const SubtitleText = styled.Text`
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
`;

export const Body: FunctionComponent<BodyProps> = ({ products, separator }) => {
  const { navigate } = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <BodyWrapper>
      <SubtitleText>TUS MOVIMIENTOS</SubtitleText>
      <ListWrapper>
        <FlatList
          keyExtractor={(item, index) => `${item?.id}_${index}`}
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={products}
          renderItem={({ item }) => (
            <ProductListItem
              productName={item.product}
              date={formatDate(item.createdAt)}
              imageUrl={item.image}
              points={item.points}
              isRedemption={item.is_redemption}
              handlePress={() => {
                navigate('ProductDetail', {
                  id: item.id,
                  createdAt: item.createdAt,
                  product: item.product,
                  points: item.points,
                  is_redemption: item.is_redemption,
                  image: item.image,
                });
              }}
            />
          )}
          ItemSeparatorComponent={separator}
        />
      </ListWrapper>
    </BodyWrapper>
  );
};
