import React, { FunctionComponent } from 'react';
import { PointsSummary } from '@components';
import styled from 'styled-components/native';

/**
 * Types
 */

interface HeaderWrapperProps {
  title: string;
  userName: string;
  ammount: number;
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
  font-family: Avenir-Medium;
  color: #020202;
  font-weight: 800;
  font-size: 20px;
  line-height: 27.32px;
`;

const UserNameText = styled.Text`
  font-family: Avenir-Medium;
  color: #020202;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.12px;
`;

const SubtitleText = styled.Text`
  font-family: Avenir-Medium;
  padding-vertical: 20px;
  color: #9b9898;
  font-weight: 800;
  font-size: 14px;
  line-height: 19.12px;
`;

export const Header: FunctionComponent<HeaderWrapperProps> = ({ title, userName, ammount }) => (
  <HeaderWrapper>
    <TitleText>{title}</TitleText>
    <UserNameText>{userName}</UserNameText>
    <SubtitleText>TUS PUNTOS</SubtitleText>
    <PointsSummaryWrapper>
      <PointsSummary ammount={ammount} month="Diciembre" />
    </PointsSummaryWrapper>
  </HeaderWrapper>
);
