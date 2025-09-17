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

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StackNavigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
