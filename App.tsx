import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPaletteModal from './screens/AddNewPaletteModal';

import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

// const RootStack = createStackNavigator();
// const MainStack = createStackNavigator();

// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen name="Home" component={Home} />
//       <MainStack.Screen
//         name="ColorPalette"
//         component={ColorPalette}
//         options={({ route }) => ({ title: route.params.paletteName })}
//       />
//     </MainStack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator>
//         <RootStack.Group>
//           <RootStack.Screen
//             name="Main"
//             component={MainStackScreen}
//             options={{ headerShown: false }}
//           />
//         </RootStack.Group>
//         <RootStack.Group screenOptions={{ presentation: 'modal' }}>
//           <RootStack.Screen
//             name="AddNewPaletteModal"
//             component={AddNewPaletteModal}
//           />
//         </RootStack.Group>
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// TODO: Make this its own component
const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'teal', fontSize: 24, fontWeight: 'bold' }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// TODO: Make this its own component
const Messages = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'teal', fontSize: 24, fontWeight: 'bold' }}>
        Messages
      </Text>
    </View>
  );
};

// TODO: optimize this
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </HomeStack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'information';

          if (route.name === 'ColorPalette') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="ColorPalette"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="AddNewPaletteModal"
            component={AddNewPaletteModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const App = () => {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator>
//         <RootStack.Group>
//           <RootStack.Screen
//             name="Main"
//             component={MainStackScreen}
//             options={{ headerShown: false }}
//           />
//         </RootStack.Group>
//         <RootStack.Group screenOptions={{ presentation: 'modal' }}>
//           <RootStack.Screen
//             name="AddNewPaletteModal"
//             component={AddNewPaletteModal}
//           />
//         </RootStack.Group>
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// };
