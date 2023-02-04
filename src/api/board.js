import { axiosInstance } from './core';
import { PATH } from '../constants/path';
import { getItem } from 'utils/storage';

const token = getItem('token');

export const getBoardList = async () => {
  try {
    const response = await axiosInstance.get(PATH.BOARD_LIST, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getBoardDetail = async (data) => {
  try {
    const response = await axiosInstance.get(PATH.LOGIN, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createBoard = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.BOARD_INSERT, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateBoard = async (data) => {
  try {
    const response = await axiosInstance.patch(PATH.BOARD_UPDATE, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteBoard = async (data) => {
  try {
    const response = await axiosInstance.delete(PATH.BOARD_DELETE, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
