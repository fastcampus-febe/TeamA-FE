import { axiosInstance } from './core';
import { PATH } from '../constants/path';
import { getItem } from 'utils/storage';

const token = getItem('token');

export const getMyInfo = async (id) => {
  return await axiosInstance.get(PATH.MYINFO + id);
};

export const deleteMyInfo = async (id) => {
  return await axiosInstance.delete(PATH.MYINFO + id, token);
};

export const postChangePW = async (id, data) => {
  return await axiosInstance.post(PATH.CHANGEPW + id, data, token);
};

export const getMyLike = async (id) => {
  return await axiosInstance.get(PATH.MYLIKE + id, token);
};

export const postLikeCancel = async (id) => {
  return await axiosInstance.post(PATH.LIKE + id, token);
};

export const getMyReview = async (id) => {
  return await axiosInstance.get(PATH.MYREVIEW + id, token);
};
