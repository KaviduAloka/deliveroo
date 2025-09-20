import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../typography';
import styles from './styles';

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
