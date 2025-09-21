import { navigationConstants } from '../constants';
import { RestaurantFoodInterface } from '../features/Restaurant/interfaces';
import { navigate, replace } from './NavigationService';

export const replaceToHome = () => replace(navigationConstants.HOME);

export const navigateToRestaurantInformation = (restaurant_id: number) => {
  navigate(navigationConstants.RESTAURANT_INFORMATION, { restaurant_id });
};

export const navigateToRestaurantFoodInformation = ({
  food,
}: {
  food: RestaurantFoodInterface;
}) => {
  navigate(navigationConstants.FOOD_INFORMATION, { food });
};

export const navigateToLoginScreen = () => {
  navigate(navigationConstants.LOGIN_SCREEN);
};

export const navigateToRegisterWithEmail = () => {
  navigate(navigationConstants.EMAIL_REGISTER);
};

export const navigateToProfile = () => {
  navigate(navigationConstants.USER_PROFILE);
};
