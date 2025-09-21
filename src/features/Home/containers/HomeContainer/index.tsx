import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideMenu from '@chakrahq/react-native-side-menu';
import {
  navigateToLoginScreen,
  navigateToRestaurantInformation,
} from '../../../../navigation/navigationHelpers';
import { ThemeContext } from '../../../../components/ThemeContext';
import { Text } from '../../../../components/typography';
import Menu from '../../views/SideMenu';
import { images } from '../../../../assets';
import styles from './styles';
import Button from '../../../../components/Button';
import CommonSpace from '../../../../components/CommonSpace';

const Home: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = <Menu />;

  return (
    <SideMenu menu={menu} isOpen={isMenuOpen} onChange={setIsMenuOpen}>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: theme.backgroundLightColor },
        ]}
      >
        <TouchableOpacity onPress={() => setIsMenuOpen(pre => !pre)}>
          <Image source={images.menu} style={styles.sideMenuIcon} />
        </TouchableOpacity>
        <CommonSpace height={100} />
        <Button onPress={() => navigateToRestaurantInformation(1)}>
          Go to restaurant
        </Button>
        <CommonSpace height={100} />
        <Button onPress={() => navigateToLoginScreen(1)}>Sign in</Button>
      </SafeAreaView>
    </SideMenu>
  );
};

export default Home;
