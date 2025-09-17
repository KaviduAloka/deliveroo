import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { images } from '../../assets';
import { replaceToHome } from '../../navigation/navigationHelpers';
import { useDispatch } from 'react-redux';
import { initData } from '../../store/appReducer/actions';

const SplashScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initData());

    const timer = setTimeout(() => {
      replaceToHome();
    }, 2000);

    return () => clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images.DELIVEROO_LOGO_TRANSPARENT} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
