/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Feature1 from './src/features/Feature1';
import Feature2 from './src/features/Feature2';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/reducers';
import { ThemeProvider } from './src/components/ThemeContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Feature1" component={Feature1} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
