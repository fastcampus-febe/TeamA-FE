import { axiosInstance } from './core';
import { PATH } from '../constants/path';
import { getItem } from 'utils/storage';

const token = getItem('token');

export const getPlaceDetail = async (id) => {
  try {
    const response = await axiosInstance.get(PATH.PLACEDETAIL + id, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};
