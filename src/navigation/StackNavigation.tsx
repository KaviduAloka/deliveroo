import { useSelector } from 'react-redux';
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
import EmailRegisterContainer from '../features/Auth/containers/EmailRegisterContainer';
import { authDataSelector } from '../features/Auth/store/selectors';
import ProfileContainer from '../features/Auth/containers/ProfileContainer';

const StackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const { theme } = useContext(ThemeContext);
  const authData = useSelector(authDataSelector);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.backgroundLightColor,
          },
        }}
      >
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
        {authData ? (
          <Stack.Group>
            {/* auth stacks */}
            <Stack.Screen
              name={navigationConstants.USER_PROFILE}
              component={ProfileContainer}
              options={{
                title: 'Profile',
                headerTintColor: theme.textColor,
                headerStyle: { backgroundColor: theme.backgroundLightColor },
              }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            {/* non-auth stacks */}
            <Stack.Screen
              name={navigationConstants.LOGIN_SCREEN}
              component={LoginScreenContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={navigationConstants.EMAIL_REGISTER}
              component={EmailRegisterContainer}
              options={{
                title: 'Register with email',
                headerTitleAlign: 'center',
                headerTintColor: theme.textColor,
                headerStyle: { backgroundColor: theme.backgroundLightColor },
              }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
