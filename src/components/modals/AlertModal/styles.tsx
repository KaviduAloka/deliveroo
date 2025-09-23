import { StyleSheet } from 'react-native';
import { colors } from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_OPACITY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    alignSelf: 'stretch',
    marginHorizontal: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.PRIMARY_WHITE,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.TEXT_2E3333,
    marginBottom: 10,
  },
  message: {
    marginBottom: 20,
  },
});
