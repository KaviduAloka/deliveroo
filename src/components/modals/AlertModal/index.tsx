import React from 'react';
import { Modal, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { alertStateSelector } from '../../../store/appReducer/selectors';
import { Text } from '../../typography';
import styles from './styles';
import Button from '../../Button';
import { hideAlert } from '../../../store/appReducer/reducer';

const AlertModal: React.FC = () => {
  const dispatch = useDispatch();

  const alertState = useSelector(alertStateSelector);

  const onActionPress = () => {
    dispatch(hideAlert());
  };

  return (
    <Modal
      visible={alertState.visible}
      transparent={true}
      animationType="fade"
      presentationStyle="overFullScreen"
    >
      <View style={styles.container}>
        <View style={styles.body}>
          {alertState.title ? (
            <Text style={styles.title}>{alertState.title}</Text>
          ) : null}
          <Text style={styles.message}>{alertState.message}</Text>
          <Button onPress={onActionPress}>Ok</Button>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
