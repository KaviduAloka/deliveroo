import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sideMenuIcon: {
    tintColor: colors.PRIMARY_GREEN,
    width: 25,
    height: 25,
  },
  goToRestaurantButton: {
    marginTop: 50,
  },
  greetingText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 20,
    color: colors.PRIMARY_GREEN,
  },
});
