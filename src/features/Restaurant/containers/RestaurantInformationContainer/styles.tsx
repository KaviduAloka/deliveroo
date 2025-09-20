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
  restaurantInfoWrapper: {
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
  headerRowItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  stickyList: {
    marginHorizontal: 20,
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
  },
  rowItemSubTitle: {
    fontSize: 14,
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
  },
  deliveryChangeText: { fontSize: 16, color: colors.PRIMARY_GREEN },
  stickyHeaderWrapper: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.BORDER_LIGHT_GRAY,
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_LIGHT_GRAY,
  },
  stickyHeaderItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  stickyHeaderItemText: (active: boolean) => ({
    color: active ? colors.PRIMARY_WHITE : colors.PRIMARY_GREEN,
    fontWeight: active ? 'bold' : 'normal',
  }),
  listCategoryText: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    fontSize: 20,
    marginVertical: 20,
  },
  foodsList: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  foodListItemWrapper: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  foodName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  foodSeparator: {
    marginHorizontal: -20,
    marginBottom: 10,
  },
  foodPrice: {
    marginTop: 5,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginLeft: 10,
  },
  footerView: {
    height: 400,
  },
  addToCartButton: {
    backgroundColor: colors.PRIMARY_WHITE,
    padding: 10,
    position: 'absolute',
    right: -10,
    bottom: -10,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: colors.BORDER_LIGHT_GRAY,
  },
  addToCartDisabledButton: {
    backgroundColor: colors.PRIMARY_WHITE,
    padding: 10,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: colors.BORDER_LIGHT_GRAY,
  },
  addToCartIcon: {
    tintColor: colors.PRIMARY_GREEN,
    width: 20,
    height: 20,
  },
  verticalCard: {
    borderWidth: 1,
    borderColor: colors.BORDER_LIGHT_GRAY,
    borderRadius: 10,
    marginLeft: 20,
    overflow: 'hidden',
    height: 200,
  },
  verticalCardImage: {
    width: 120,
    height: 120,
  },
  verticalCardBody: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  verticalCardTitle: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  addToCartButtonVerticalCard: {
    backgroundColor: colors.PRIMARY_WHITE,
    padding: 10,
    position: 'absolute',
    right: 5,
    bottom: -10,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: colors.BORDER_LIGHT_GRAY,
  },
  addToCartIconVerticalCard: {
    tintColor: colors.PRIMARY_GREEN,
    width: 20,
    height: 20,
  },
});
