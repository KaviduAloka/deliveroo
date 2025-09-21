/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import { store } from './src/store/reducers';
import { ThemeProvider } from './src/components/ThemeContext';
import StackNavigation from './src/navigation/StackNavigation';
import { LoadingModal } from './src/components/modals';
import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '202744121328-6hp4ma8rdvisglmasku41l2gkooqolu0.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <StackNavigation />
        <LoadingModal />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
