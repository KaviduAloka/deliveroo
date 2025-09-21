import React, { ReactNode } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from '../typography';
import styles from './styles';

interface Props {
  children: ReactNode;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
