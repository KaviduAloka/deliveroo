import { Platform } from 'react-native';

const BASE_URL = `http://${Platform.select({
  ios: '127.0.0.1',
  android: '10.0.2.2',
})}:3000`;

export const ApiEndpoints = {
  registerAuthUid: `${BASE_URL}/register_auth_uid`,
};
