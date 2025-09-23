import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  backArrowButton: {
    marginVertical: 20,
  },
  backArrowIcon: {
    tintColor: colors.PRIMARY_GREEN,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  logo: {
    height: 150,
    marginVertical: 30,
  },
  button: {
    alignSelf: 'stretch',
    padding: 15,
    marginTop: 10,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 18,
    color: colors.PRIMARY_GREEN,
  },
  googleSigninButton: { width: 192 },
});
