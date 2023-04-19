import React, { FunctionComponent } from 'react';
import { PointsSummary } from '@components';
import { updatePoints } from '@helpers';
import styled from 'styled-components/native';

// TODO: Remove import below
import { productsMock } from '@screens';

/**
 * Types
 */

interface HeaderWrapperProps {
  title: string;
  userName: string;
}

/**
 * Styled components
 */

const HeaderWrapper = styled.View`
  padding-horizontal: 20px;
  margin-top: 20px;
`;

const PointsSummaryWrapper = styled.View`
  padding-horizontal: 8%;
`;

const TitleText = styled.Text`
  color: #020202;
  font-weight: 800;
  font-size: 20px;
  line-height: 27.32px;
`;

const UserNameText = styled.Text`
  color: #020202;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.12px;
`;

const SubtitleText = styled.Text`
  padding-vertical: 20px;
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
`;

export const Header: FunctionComponent<HeaderWrapperProps> = ({ title, userName }) => (
  <HeaderWrapper>
    <TitleText>{title}</TitleText>
    <UserNameText>{userName}</UserNameText>
    <SubtitleText>TUS PUNTOS</SubtitleText>
    <PointsSummaryWrapper>
      {/* TODO: the list of actual products will come from the service that calls the API */}
      <PointsSummary ammount={updatePoints(productsMock)} month="Diciembre" />
    </PointsSummaryWrapper>
  </HeaderWrapper>
);
