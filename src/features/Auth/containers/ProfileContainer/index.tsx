import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '../../../../components/typography';
import styles from './styles';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../store/selectors';
import { images } from '../../../../assets';

const ProfileContainer: React.FC = () => {
  const profile = useSelector(profileSelector);

  return (
    <View style={styles.container}>
      <Image source={images.deliveroo_logo_transparent} />
      <Text style={styles.text}>
        Hello there, <Text style={styles.emailText}>{profile!.email}</Text>
      </Text>
    </View>
  );
};

export default ProfileContainer;
