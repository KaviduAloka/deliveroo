import { StyleSheet } from 'react-native';
import { colors } from '../../assets';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY_GREEN,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.PRIMARY_WHITE,
    fontWeight: 'bold',
  },
});
