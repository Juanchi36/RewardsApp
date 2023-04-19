import React, { FunctionComponent, useState } from 'react';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '@routing/types';
import { formatDate } from '@helpers';
import { Button } from '@components';
import styled from 'styled-components/native';

/**
 * Types
 */

type ProductDetailScreenProps = StackScreenProps<StackParamList, 'ProductDetail'>;

/**
 * Styled components
 */

const ProductDetailWrapper = styled.SafeAreaView`
  background-color: #cfd6ff;
  height: 150px;
`;

const ContentWrapper = styled.View`
  padding-horizontal: 20px;
`;

const TitleText = styled.Text`
  margin-top: 62px;
  color: #000000;
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
`;

const ImageCard = styled.View`
  margin-vertical: 32px
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  shadow-opacity: 0.5;
  shadow-radius: 20px;
  shadow-offset: 0px 5px;
  elevation: 1;
  justify-content: center;
  align-items: center;
`;

const SubtitleText = styled.Text`
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
  margin-bottom: 19px;
`;

const InfoText = styled.Text`
  color: #000000;
  font-weight: 800;
  font-size: 16px;
  line-height: 21.86px;
  margin-bottom: 19px;
`;

const PointsText = styled.Text`
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
  bottom: 5%;
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
      <ProductDetailWrapper>
        <ContentWrapper>
          <TitleText>{product}</TitleText>
          <ImageCard>
            {loading && <Loader />}
            <Image resizeMode="cover" source={{ uri: image }} onLoad={() => setLoading(false)} />
          </ImageCard>
          <SubtitleText>Detalles del producto:</SubtitleText>
          <InfoText>{`Comprado el ${formatDate(createdAt)}`}</InfoText>
          <SubtitleText>Con esta compra acumulaste:</SubtitleText>
          <PointsText>{`${points} puntos`}</PointsText>
        </ContentWrapper>
      </ProductDetailWrapper>
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
