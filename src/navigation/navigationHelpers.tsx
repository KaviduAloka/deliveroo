import { navigationConstants } from '../constants';
import { navigate, replace } from './NavigationService';

export const replaceToHome = () => replace(navigationConstants.HOME);

export const navigateToRestaurantInformation = (restaurant_id: number) => {
  navigate(navigationConstants.RESTAURANT_INFORMATION, { restaurant_id });
};
