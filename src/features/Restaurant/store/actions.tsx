export const getRestaurantInformation = (payload: {
  restaurant_id: number;
}) => ({
  type: 'RESTAURANT/GET_RESTAURANT_INFORMATION',
  payload,
});
