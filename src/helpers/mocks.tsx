import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type MockedStackParamsList = {
  MockedScreen: undefined;
};

interface MockContainerParams {
  children: FunctionComponent;
  params?: any;
}

const Stack = createNativeStackNavigator<MockedStackParamsList>();

export const MockContainer = ({ children, params }: MockContainerParams) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const MockedScreen = () => <>{children}</>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" component={MockedScreen} initialParams={params} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
