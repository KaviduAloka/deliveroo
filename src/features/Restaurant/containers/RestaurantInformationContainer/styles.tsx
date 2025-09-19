import { StyleSheet } from 'react-native';
import { colors } from '../../../../assets';
import { screenWidth } from '../../../../themes/dimensions';

export default StyleSheet.create({
  headerImageWrapper: {
    marginVertical: 10,
  },
  headerImage: {
    width: screenWidth,
    height: 240,
    marginLeft: -20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: -10,
    backgroundColor: colors.PRIMARY_WHITE,
    padding: 10,
    borderRadius: '50%',
  },
  backButtonIcon: {
    tintColor: colors.PRIMARY_GREEN,
  },
  restaurantDetailsWrapper: {
    marginVertical: 10,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: '900',
  },
  restaurantSubText: {
    fontSize: 16,
    marginBottom: 5,
  },
  headerRowItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: colors.BORDER_GRAY,
  },
  rowItemContentWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  rowItemTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.TEXT_2E3333,
  },
  rowItemSubTitle: {
    fontSize: 14,
    color: colors.TEXT_585C5C,
  },
  rightArrowIcon: {
    tintColor: colors.PRIMARY_GREEN,
    marginLeft: 10,
    width: 18,
    height: 18,
  },
  deliveryIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  deliveryText: {
    flex: 1,
    fontSize: 16,
    color: colors.TEXT_2E3333,
  },
  deliveryChangeText: { fontSize: 16, color: colors.PRIMARY_GREEN },
});
