import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useSelector } from 'react-redux';
import { loadingStateSelector } from '../../../store/appReducer/selectors';
import styles from './styles';
import { Text } from '../../typography';
import { colors } from '../../../assets';

const LoadingModal: React.FC = () => {
  const loading = useSelector(loadingStateSelector);

  return (
    <Modal
      visible={loading.queLength > 0}
      transparent={true}
      animationType="fade"
      presentationStyle="overFullScreen"
    >
      <View style={styles.container}>
        <View style={styles.body}>
          <ActivityIndicator size="large" color={colors.PRIMARY_GREEN} />
          <Text style={styles.text}>Please wait . . .</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
