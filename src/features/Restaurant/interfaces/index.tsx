export interface RestaurantInformationResponseInterface {
  restaurant: RestaurantInterface;
  foods: {
    categories: string[];
    categorizedFoods: {
      category: string;
      foods: RestaurantFoodInterface[];
    }[];
    popularWithOthers: RestaurantFoodInterface[];
  };
}

export interface RestaurantInterface {
  restaurant_name: string;
  restaurant_description: string;
  restaurant_image: string;
  restaurant_rating: number;
  restaurant_rating_count: number;
  restaurant_delivery_time: string;
  restaurant_delivery_fee: string;
  restaurant_address: string;
}

export interface RestaurantFoodInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}
