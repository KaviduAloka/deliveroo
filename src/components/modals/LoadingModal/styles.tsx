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
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.PRIMARY_WHITE,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    color: colors.BORDER_GRAY,
  },
});
