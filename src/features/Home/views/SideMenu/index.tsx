import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { ThemeContext } from '../../../../components/ThemeContext';
import { Text } from '../../../../components/typography';
import Switch from '../../../../components/Switch';

const SideMenu: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeChange = () => {
    toggleTheme();
    setIsDarkMode(pre => !pre);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.darkModeWrapper}>
        <Text style={styles.darkModeText}>Dark mode</Text>
        <Switch value={isDarkMode} onChange={onDarkModeChange} />
      </View>
    </SafeAreaView>
  );
};

export default SideMenu;
