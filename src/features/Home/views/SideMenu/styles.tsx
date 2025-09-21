import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50,
    alignSelf: 'center',
  },
  darkModeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  darkModeText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutText: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 16,
    color: colors.TEXT_RED,
  },
});
