import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

/**
 * Types
 */

interface ButtonProps {
  title: string;
  handlePress?: () => void;
}

/**
 * Styled components
 */

const ButtonWrapper = styled.View`
  background-color: #334ffa;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 50px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: 800;
  font-size: 16px;
  line-height: 21.86px;
`;

export const Button: FunctionComponent<ButtonProps> = ({ title, handlePress }) => (
  <TouchableOpacity onPress={handlePress}>
    <ButtonWrapper testID="primary-button">
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  </TouchableOpacity>
);
