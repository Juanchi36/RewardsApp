import React, { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';
import { ProductDetailScreenParams } from '@routing/types';
import { ProductListItem } from '@components';
import styled, { DefaultTheme } from 'styled-components/native';
import { StyledComponent } from 'styled-components';
import { formatDate } from '@helpers';

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

export const Body: FunctionComponent<BodyProps> = ({ products, separator }) => (
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
            // TODO: the management of the press will be implemented in a future PR
            handlePress={() => {}}
          />
        )}
        ItemSeparatorComponent={separator}
      />
    </ListWrapper>
  </BodyWrapper>
);
