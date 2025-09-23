export interface EmailAuthParameterInterface {
  data: {
    email: string;
    password: string;
  };
}

export interface ProfileInterface {
  user_id: number;
  name: null | string;
  email: string;
  auth_id: string;
  refresh_token: string;
  access_token: string;
}

export interface AuthApiResponseInterface {
  data: { profile: ProfileInterface; access_token: string };
}
