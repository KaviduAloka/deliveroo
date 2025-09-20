export const getRestaurantInformation = (payload: {
  restaurant_id: number;
  callback: (response: any) => void;
}) => ({
  type: 'RESTAURANT/GET_RESTAURANT_INFORMATION',
  payload,
});
