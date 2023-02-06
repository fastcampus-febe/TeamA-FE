import { axiosInstance } from './core';
import { PATH } from '../constants/path';
import { getItem } from 'utils/storage';

const token = getItem('token');

export const getMyInfo = async () => {
  try {
    const response = await axiosInstance.get(PATH.MYINFO, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyInfo = async () => {
  try {
    const response = await axiosInstance.delete(PATH.MYINFO, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postChangePW = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.CHANGEPW, data, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMyLike = async () => {
  try {
    const response = await axiosInstance.get(PATH.MYLIKE, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMyReview = async () => {
  try {
    const response = await axiosInstance.get(PATH.MYREVIEW, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};
