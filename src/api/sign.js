import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const postSignUp = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.SIGNUP, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postSignIn = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.LOGIN, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postSignOut = async () => {
  try {
    const response = await axiosInstance.post(PATH.LOGOUT);
    return response;
  } catch (error) {
    console.error(error);
  }
};
