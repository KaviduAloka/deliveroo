import { ApiEndpoints } from '../constants/ApiEndpoints';
import ApiService from './ApiService';

export const registerAuthUidApi = (body: {
  email: string;
  auth_uid: string;
}) => {
  return ApiService(ApiEndpoints.registerAuthUid, 'POST', body, {
    api_key: 'DELIVEROO_@2025',
  });
};

export const signinAuthUidApi = (body: { email: string; auth_uid: string }) => {
  return ApiService(ApiEndpoints.signinAuthUid, 'POST', body, {
    api_key: 'DELIVEROO_@2025',
  });
};
