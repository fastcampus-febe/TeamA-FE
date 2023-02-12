import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const getReviewRank = async () => {
  return await axiosInstance.get(PATH.REVIEW_RANK);
};

export const getLikeRank = async () => {
  return await axiosInstance.get(PATH.LIKE_RANK);
};
