import {
  StyleProp,
  TextInputProps,
  View,
  ViewStyle,
  TextInput as RNTextInput,
} from 'react-native';
import styles from './styles';
import Text from '../Text';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

interface Props extends TextInputProps {
  label?: string;
  errorText?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInput: React.FC<Props> = ({ label, containerStyle, ...rest }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <RNTextInput
        style={[styles.input, { color: theme.textColor }]}
        placeholderTextColor={theme.textLightColor}
        {...rest}
      />
    </View>
  );
};

export default TextInput;
