import React, { useContext } from 'react';
import { View, ViewStyle } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import styles from './styles';

interface Props {
  style?: ViewStyle;
}

const Divider: React.FC<Props> = ({ style = {} }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      testID="divider"
      style={[
        styles.wrapper,
        { borderBottomColor: theme.backgroundLightColor },
        style,
      ]}
    />
  );
};

export default Divider;
