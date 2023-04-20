import React, { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductDetailScreenParams, StackParamList } from '@routing/types';
import { ProductListItem } from '@components';
import { formatDate, isSmallDevice } from '@helpers';
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
  loading: boolean;
}

/**
 * Styled components
 */

const BodyWrapper = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

const ListWrapper = styled.View<{ smallDevice: boolean }>`
  margin-top: 20px;
  padding-vertical: 20px;
  padding-horizontal: 15px;
  background-color: #fff;
  border-radius: 10px;
  max-height: ${({ smallDevice }) => (smallDevice ? '65%' : '77%')};
`;

const SubtitleText = styled.Text`
  font-family: Avenir-Medium;
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
`;

export const Body: FunctionComponent<BodyProps> = ({ products, separator, loading }) => {
  const { navigate } = useNavigation<StackNavigationProp<StackParamList>>();

  return (
    <BodyWrapper>
      <SubtitleText>TUS MOVIMIENTOS</SubtitleText>
      <ListWrapper smallDevice={isSmallDevice}>
        {!loading && (
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
            initialNumToRender={2}
          />
        )}
      </ListWrapper>
    </BodyWrapper>
  );
};
