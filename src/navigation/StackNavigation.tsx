import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { navigationConstants } from '../constants';
import SplashScreen from '../features/SplashScreen';
import Home from '../features/Home/containers/HomeContainer';
import { navigationRef } from './NavigationService';
import RestaurantInformationContainer from '../features/Restaurant/containers/RestaurantInformationContainer';
import RestaurantFoodInformationContainer from '../features/Restaurant/containers/RestaurantFoodInformationContainer';
import LoginScreenContainer from '../features/Auth/containers/LoginScreenContainer';
import { StatusBar } from 'react-native';
import { ThemeContext } from '../components/ThemeContext';

const StackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator>
        <Stack.Screen
          name={navigationConstants.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={navigationConstants.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={navigationConstants.RESTAURANT_INFORMATION}
          component={RestaurantInformationContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={navigationConstants.FOOD_INFORMATION}
          component={RestaurantFoodInformationContainer}
          options={{
            headerShown: false,
            presentation: 'containedModal',
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen
          name={navigationConstants.LOGIN_SCREEN}
          component={LoginScreenContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
