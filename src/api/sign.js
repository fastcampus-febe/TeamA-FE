import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const postSignUp = async (data) => {
  return await axiosInstance.post(PATH.SIGNUP, data);
};

export const postSignIn = async (data) => {
  return await axiosInstance.post(PATH.LOGIN, data);
};

export const postSignOut = async () => {
  return await axiosInstance.post(PATH.LOGOUT);
};
