import { StyleSheet } from 'react-native';
import { colors } from '../../../../../assets';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  logo: {
    width: 150,
    height: 50,
  },
  actionButton: {
    height: 40,
    borderColor: colors.BORDER_GRAY,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  actionButtonIcon: {
    tintColor: colors.PRIMARY_GREEN,
    width: 15,
    height: 15,
  },
});
