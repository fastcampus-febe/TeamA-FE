import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const postUserSignUp = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.SIGNUP, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postUserSignIn = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.LOGIN, data);
    return response;
  } catch (error) {
    console.error(error);
    return { isFailed: true, errorMessage: '아이디 또는 비밀번호를 확인해주세요.' };
  }
};

export const postUserSignOut = async () => {
  try {
    const response = await axiosInstance.post(PATH.LOGOUT);
    return response;
  } catch (error) {
    console.error(error);
  }
};
