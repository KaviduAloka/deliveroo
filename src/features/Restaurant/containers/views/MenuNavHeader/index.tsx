import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { images } from '../../../../../assets';
import commonStyles from '../../../../../themes/commonStyles';
import CommonSpace from '../../../../../components/CommonSpace';

const MenuNavHeader: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={images.DELIVEROO_LOGO_HORIZONTAL}
        style={styles.logo}
        resizeMethod="resize"
      />
      <View style={commonStyles.row}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.SEARCH_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        <CommonSpace width={20} />
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.HOME_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={images.USER_24} style={styles.actionButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuNavHeader;
