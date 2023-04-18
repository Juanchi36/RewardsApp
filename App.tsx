/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const QRScanner = () => {
  return <></>;
};

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Caca">
        <Stack.Screen name="Caca" component={QRScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
