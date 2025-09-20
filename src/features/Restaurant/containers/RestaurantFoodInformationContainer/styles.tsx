import { StyleSheet } from 'react-native';
import { screenWidth } from '../../../../themes/dimensions';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: screenWidth,
    height: 300,
  },
  headerCloseButton: {
    backgroundColor: colors.PRIMARY_WHITE,
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 15,
    borderRadius: '50%',
  },
  headerCloseIcon: {
    tintColor: colors.PRIMARY_GREEN,
    width: 18,
    height: 18,
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  cartWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    alignItems: 'center',
  },
  cartIcon: (active: boolean) => ({
    tintColor: active ? colors.PRIMARY_GREEN : colors.BACKGROUND_LIGHT,
    width: 30,
    height: 30,
  }),
  cartValue: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
