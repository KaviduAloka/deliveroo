import axios, { AxiosError, Method } from 'axios';
import { store } from '../store/reducers';

function ApiService(
  url: string,
  method: Method,
  body?: any,
  requestHeaders = {},
) {
  return new Promise(async (resolve, reject) => {
    try {
      // const accessToken: null | string =
      //   store.getState().appReducer.accessToken;

      const headers: any = {
        'Content-Type': 'application/json',
        Accept: '*/*',
        ...requestHeaders,
      };

      // if (accessToken) {
      //   headers.Authorization = `Bearer ${accessToken}`;
      // }

      __DEV__ &&
        console.log(
          '\x1b[35m',
          'REQUEST: ',
          url,
          '\n',
          JSON.stringify({ method, body, headers }, null, '   '),
          '\x1b[0m',
        );

      axios(url, {
        method,
        data: body ? JSON.stringify(body) : undefined,
        headers,
        responseType: 'json',
      })
        .then(response => {
          console.log(
            '\x1b[32m',
            'RESPONSE: ',
            JSON.stringify(response.data, null, '  '),
            '\x1b[0m',
          );

          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(error.response);
        });
    } catch (error) {
      console.log('\x1b[31m', 'API ERROR: ', error, '\x1b[0m');
      reject(error);
    }
  });
}

export default ApiService;
