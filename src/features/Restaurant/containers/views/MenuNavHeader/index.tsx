import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { images } from '../../../../../assets';
import commonStyles from '../../../../../themes/commonStyles';
import CommonSpace from '../../../../../components/CommonSpace';
import {
  navigateToLoginScreen,
  navigateToProfile,
} from '../../../../../navigation/navigationHelpers';
import { authDataSelector } from '../../../../Auth/store/selectors';

const MenuNavHeader: React.FC = () => {
  const authData = useSelector(authDataSelector);

  const onUserIconPress = () => {
    if (authData) {
      navigateToProfile();
    } else {
      navigateToLoginScreen();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image
        source={images.deliveroo_logo_horizontal}
        style={styles.logo}
        resizeMethod="resize"
      />
      <View style={commonStyles.row}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.search_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        <CommonSpace width={20} />
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.home_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onUserIconPress} style={styles.actionButton}>
          <Image source={images.user_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuNavHeader;
