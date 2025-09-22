import {
  replaceToHome,
  navigateToRestaurantInformation,
  navigateToRestaurantFoodInformation,
  navigateToLoginScreen,
} from '../../../src/navigation/navigationHelpers'; // adjust path
import { navigationConstants } from '../../../src/constants';
import * as NavigationService from '../../../src/navigation/NavigationService';

describe('NavigationHelpers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls replace with HOME in replaceToHome', () => {
    const replaceMock = jest.spyOn(NavigationService, 'replace');
    replaceToHome();
    expect(replaceMock).toHaveBeenCalledWith(navigationConstants.HOME);
  });

  it('calls navigate with RESTAURANT_INFORMATION and restaurant_id', () => {
    const navigateMock = jest.spyOn(NavigationService, 'navigate');
    navigateToRestaurantInformation(42);
    expect(navigateMock).toHaveBeenCalledWith(
      navigationConstants.RESTAURANT_INFORMATION,
      { restaurant_id: 42 },
    );
  });

  it('calls navigate with FOOD_INFORMATION and food object', () => {
    const navigateMock = jest.spyOn(NavigationService, 'navigate');
    const mockFood = { id: 1, name: 'Pizza', price: 10 }; // matches RestaurantFoodInterface
    navigateToRestaurantFoodInformation({ food: mockFood });
    expect(navigateMock).toHaveBeenCalledWith(
      navigationConstants.FOOD_INFORMATION,
      {
        food: mockFood,
      },
    );
  });

  it('calls navigate with LOGIN_SCREEN in navigateToLoginScreen', () => {
    const navigateMock = jest.spyOn(NavigationService, 'navigate');
    navigateToLoginScreen();
    expect(navigateMock).toHaveBeenCalledWith(navigationConstants.LOGIN_SCREEN);
  });
});
