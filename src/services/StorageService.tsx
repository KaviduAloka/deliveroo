import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageConstants } from '../constants';

export const saveToStorage = (object: Object): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(
        storageConstants.PROFILE_DATA,
        JSON.stringify(object),
      );

      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};

export const getStorageValue = (storageKey: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const profile = await AsyncStorage.getItem(storageKey);

      resolve(profile ? JSON.parse(profile) : null);
    } catch (error) {
      reject(false);
    }
  });
};

export const removeFromStorage = (storageKey: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem(storageKey);

      resolve(true);
    } catch (error) {
      reject(false);
    }
  });
};
