import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

/**
 * Types
 */

interface ButtonProps {
  title: string;
  isASingleButton: boolean;
  handlePress?: () => void;
}

/**
 * Styled components
 */

const ButtonWrapper = styled.TouchableOpacity<{ isASingleButton: boolean }>`
  background-color: #334ffa;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 48%;
  width: ${({ isASingleButton }) => (isASingleButton ? '100%' : '48%')};
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: 800;
  font-size: 12px;
  line-height: 16.39px;
`;

export const Button: FunctionComponent<ButtonProps> = ({ title, isASingleButton, handlePress }) => (
  <ButtonWrapper onPress={handlePress} isASingleButton={isASingleButton} testID="primary-button">
    <ButtonText>{title}</ButtonText>
  </ButtonWrapper>
);
