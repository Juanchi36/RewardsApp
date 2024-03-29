import React, { FunctionComponent, useState } from 'react';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '@routing/types';
import { formatDate, isSmallDevice } from '@helpers';
import { Button } from '@components';
import styled from 'styled-components/native';

/**
 * Types
 */

type ProductDetailScreenProps = StackScreenProps<StackParamList, 'ProductDetail'>;

/**
 * Styled components
 */

const HeaderWrapper = styled.SafeAreaView`
  background-color: #cfd6ff;
  height: 150px;
`;

const ContentWrapper = styled.View`
  padding-horizontal: 20px;
`;

const TitleText = styled.Text`
  font-family: Avenir-Medium;
  color: #000000;
  font-weight: 800;
  font-size: 24px;
  line-height: 26px;
  position: absolute;
  left: 20px;
  top: 110px;
`;

const ImageCard = styled.View<{ smallDevice: boolean }>`
  margin-vertical: 19px
  background-color: #ffffff;
  border-radius: 10px;
  shadow-opacity: 0.5;
  shadow-radius: 20px;
  shadow-offset: 0px 5px;
  elevation: 1;
  justify-content: center;
  align-items: center;
  height: ${({ smallDevice }) => (smallDevice ? '200px' : '350px')};
`;

const SubtitleText = styled.Text`
  font-family: Avenir-Medium;
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
  margin-bottom: 19px;
  margin-top: 13px;
`;

const InfoText = styled.Text`
  font-family: Avenir-Medium;
  color: #000000;
  font-weight: 800;
  font-size: 16px;
  line-height: 21.86px;
  margin-bottom: 19px;
`;

const PointsText = styled.Text`
  font-family: Avenir-Medium;
  color: #000000;
  font-weight: 800;
  font-size: 24px;
  line-height: 32.78px;
  margin-top: 13px;
`;

const FooterWrapper = styled.View`
  padding-horizontal: 20px;
  width: 100%;
  position: absolute;
  bottom: 4.5%;
  left: 0%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Loader = styled.ActivityIndicator`
  flex: 1;
  margin-top: 100%;
`;

export const ProductDetail: FunctionComponent<ProductDetailScreenProps> = ({
  route: {
    params: { product, createdAt, points, image },
  },
}) => {
  const { goBack } = useNavigation<StackNavigationProp<StackParamList>>();

  const [loading, setLoading] = useState(true);

  return (
    <>
      <HeaderWrapper testID="product-detail-screen">
        <TitleText>{product}</TitleText>
      </HeaderWrapper>
      <ContentWrapper>
        <ImageCard smallDevice={isSmallDevice}>
          {loading && <Loader />}
          <Image resizeMode="cover" source={{ uri: image }} onLoad={() => setLoading(false)} />
        </ImageCard>
        <SubtitleText>Detalles del producto:</SubtitleText>
        <InfoText>{`Comprado el ${formatDate(createdAt)}`}</InfoText>
        <SubtitleText>Con esta compra acumulaste:</SubtitleText>
        <PointsText>{`${points} puntos`}</PointsText>
      </ContentWrapper>
      <FooterWrapper>
        <Button
          title="Aceptar"
          isASingleButton={true}
          handlePress={() => {
            goBack();
          }}
        />
      </FooterWrapper>
    </>
  );
};
