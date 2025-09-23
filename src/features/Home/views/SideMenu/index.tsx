import React, { useContext, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { ThemeContext } from '../../../../components/ThemeContext';
import { Text } from '../../../../components/typography';
import Switch from '../../../../components/Switch';
import { images } from '../../../../assets';
import { authDataSelector } from '../../../Auth/store/selectors';
import { signout } from '../../../Auth/store/actions';

const SideMenu: React.FC = () => {
  const dispatch = useDispatch();

  const authData = useSelector(authDataSelector);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onDarkModeChange = () => {
    toggleTheme();
    setIsDarkMode(pre => !pre);
  };

  const onSignOut = () => {
    dispatch(signout());
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View>
        <Image
          source={images.deliveroo_logo_transparent}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.darkModeWrapper}>
          <Text style={styles.darkModeText}>Dark mode</Text>
          <Switch value={isDarkMode} onChange={onDarkModeChange} />
        </View>
      </View>
      {authData ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onSignOut}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

export default SideMenu;
