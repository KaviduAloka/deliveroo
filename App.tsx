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

function App() {
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
