import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';

export default StyleSheet.create({
  headerImageWrapper: {
    marginVertical: 10,
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.PRIMARY_WHITE,
    padding: 10,
    borderRadius: '50%',
  },
  backButtonIcon: {
    tintColor: colors.PRIMARY_GREEN,
  },
  restaurantDetailsWrapper: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: '900',
  },
  restaurantSubText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
