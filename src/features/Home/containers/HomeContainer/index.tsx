import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideMenu from '@chakrahq/react-native-side-menu';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import {
  navigateToLoginScreen,
  navigateToRestaurantInformation,
} from '../../../../navigation/navigationHelpers';
import { ThemeContext } from '../../../../components/ThemeContext';
import Menu from '../../views/SideMenu';
import { images } from '../../../../assets';
import styles from './styles';
import Button from '../../../../components/Button';
import CommonSpace from '../../../../components/CommonSpace';
import { setAuthData } from '../../../Auth/store/reducer';
import {
  authDataSelector,
  profileSelector,
} from '../../../Auth/store/selectors';
import { Text } from '../../../../components/typography';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { theme } = React.useContext(ThemeContext);

  const authData = useSelector(authDataSelector);
  const profile = useSelector(profileSelector);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authInitializing, setAuthInitializing] = useState(false);

  useEffect(() => {
    const authSubscriber = onAuthStateChanged(getAuth(), _authData => {
      if (!authInitializing && _authData) {
        setAuthInitializing(true);

        dispatch(setAuthData(_authData));

        setAuthInitializing(false);
      }
    });

    return authSubscriber;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('PROFILE:', profile);
  }, [profile]);

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
        {authData ? (
          <Text style={styles.greetingText}>Hello there, welcome . . .</Text>
        ) : null}
        <Button onPress={() => navigateToRestaurantInformation(1)}>
          Go to restaurant
        </Button>
        <CommonSpace height={100} />
        {!authData ? (
          <Button onPress={() => navigateToLoginScreen()}>Sign in</Button>
        ) : null}
      </SafeAreaView>
    </SideMenu>
  );
};

export default Home;
