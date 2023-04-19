import React, { FunctionComponent, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Images } from '@helpers';
import styled from 'styled-components/native';

/**
 * Types
 */

interface ProductListItemProps {
  productName: string;
  date: string;
  imageUrl: string;
  points: number;
  isRedemption: boolean;
  handlePress?: () => void;
}

/**
 * Styled components
 */

const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoWrapper = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 11px;
`;

const ProductWrapper = styled.View`
  flex: 0.8;
  flex-direction: row;
`;

const PointsWrapper = styled.View`
  flex-direction: row;
`;

const ThumbnailImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`;

const ChevronRight = styled.Image`
  width: 10px;
  height: 10px;
`;

const Sign = styled.Text<{ isRedemption: boolean }>`
  font-family: Avenir-Medium;
  color: ${({ isRedemption }) => (isRedemption ? '#FF0000' : '#00B833')};
  font-weight: 800;
  font-size: 16px;
  line-height: 21.86px;
  margin-right: 2px;
`;

const BoldText = styled.Text<{ isProductName: boolean }>`
  font-family: Avenir-Medium;
  color: #000000;
  font-weight: 800;
  font-size: 16px;
  font-size: ${({ isProductName }) => (isProductName ? '14px' : '16px')};
  line-height: ${({ isProductName }) => (isProductName ? '19.12px' : '21.86px')};
  max-width: 90%;
`;

const DateText = styled.Text`
  font-family: Avenir-Medium;
  color: #000000;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;
`;

export const ProductListItem: FunctionComponent<ProductListItemProps> = memo(
  ({ productName, date, imageUrl, points, isRedemption, handlePress }) => (
    <TouchableOpacity onPress={handlePress}>
      <ItemWrapper testID="product-item">
        <ProductWrapper>
          <ThumbnailImage resizeMode="cover" source={{ uri: imageUrl }} />
          <InfoWrapper>
            <BoldText isProductName={true} numberOfLines={1}>
              {productName}
            </BoldText>
            <DateText>{date}</DateText>
          </InfoWrapper>
        </ProductWrapper>
        <PointsWrapper>
          <Sign isRedemption={isRedemption} testID="product-item-sign">
            {isRedemption ? '-' : '+'}
          </Sign>
          <BoldText isProductName={false}>{points}</BoldText>
        </PointsWrapper>
        <ChevronRight resizeMode="cover" source={Images.ProductDetail.ChevronRight} />
      </ItemWrapper>
    </TouchableOpacity>
  )
);
