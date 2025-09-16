/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Feature1 from './src/features/Feature1';
import Feature2 from './src/features/Feature2';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/reducers';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
