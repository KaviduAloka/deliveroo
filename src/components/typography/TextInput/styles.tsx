import { StyleSheet } from 'react-native';
import { colors } from '../../../assets';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
