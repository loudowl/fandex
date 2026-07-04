import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import AlertScreen from './screens/AlertScreen';
import SettingsScreen from './screens/SettingsScreen';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Portfolio" component={PortfolioScreen} />
          <Stack.Screen name="Alerts" component={AlertScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
