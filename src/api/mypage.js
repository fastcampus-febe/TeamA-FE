import { axiosInstance } from './core';
import { PATH } from '../constants/path';
import { getItem } from 'utils/storage';

const token = getItem('token');

export const getMyInfo = async (id) => {
  try {
    const response = await axiosInstance.get(PATH.MYINFO + id, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMyInfo = async (id) => {
  try {
    const response = await axiosInstance.delete(PATH.MYINFO + id, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postChangePW = async (id, data) => {
  try {
    const response = await axiosInstance.post(PATH.CHANGEPW + id, data, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMyLike = async (id) => {
  try {
    const response = await axiosInstance.get(PATH.MYLIKE + id, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMyReview = async (id) => {
  try {
    const response = await axiosInstance.get(PATH.MYREVIEW + id, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};
