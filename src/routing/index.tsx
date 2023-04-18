import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ProductDetail } from '@screens';
import { StackParamList } from './types';
import styled from 'styled-components/native';

/**
 * Styled components
 */

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

/**
 * Constants
 */

const Stack = createNativeStackNavigator<StackParamList>();

/**
 * MainStack
 */

export const MainStack: FunctionComponent = () => (
  <SafeArea>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeArea>
);
