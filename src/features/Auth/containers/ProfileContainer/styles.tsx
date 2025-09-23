import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.PRIMARY_GREEN,
    fontSize: 20,
    marginTop: 50,
  },
  emailText: {
    fontWeight: 'bold',
    color: colors.PRIMARY_GREEN,
  },
});
