import React, { FunctionComponent } from 'react';
import { formatPoints } from '@helpers';
import styled from 'styled-components/native';

/**
 * Types
 */

interface PointsSummaryProps {
  ammount: number;
  month: string;
}

/**
 * Styled components
 */

const SummaryWrapper = styled.View`
  background-color: #334ffa;
  height: 143px;
  border-radius: 20px;
  shadow-opacity: 0.5;
  shadow-radius: 20px;
  shadow-offset: 0px 4px;
  elevation: 1;
  justify-content: center;
`;

const MonthText = styled.Text`
  font-family: Avenir-Medium;
  color: #ffffff;
  font-weight: 800;
  font-size: 16px;
  line-height: 21.86px;
  position: absolute;
  top: 21px;
  left: 18px;
`;

const AmountText = styled.Text`
  font-family: Avenir-Medium;
  color: #ffffff;
  font-weight: 800;
  font-size: 32px;
  line-height: 43.71px;
  text-align: center;
`;

export const PointsSummary: FunctionComponent<PointsSummaryProps> = ({ ammount, month }) => (
  <SummaryWrapper testID="points-summaty-container">
    <MonthText>{month}</MonthText>
    <AmountText>{`${formatPoints(ammount)} pts`}</AmountText>
  </SummaryWrapper>
);
