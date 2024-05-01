import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.item.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;