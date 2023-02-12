import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const getBoardList = async () => {
  return await axiosInstance.get(PATH.BOARD_LIST);
};

export const getBoardListSearch = async (type, data) => {
  const path = type === 'title' ? PATH.BOARD_SEARCH_TITLE : PATH.BOARD_SEARCH_NICKNAME;
  return await axiosInstance.get(path + '/' + data);
};

export const getBoardListSort = async (type) => {
  const path = type === 'recent' ? PATH.BOARD_ORDER_DATE : PATH.BOARD_ORDER_LIKE;
  return await axiosInstance.get(path);
};

export const getBoardDetail = async (id) => {
  return await axiosInstance.get(PATH.BOARD_DETAIL + '/' + id);
};

export const thumbBoard = async (id) => {
  return await axiosInstance.post(PATH.BOARD_THUMB + id);
};

export const createBoard = async (data) => {
  return await axiosInstance.post(PATH.BOARD_INSERT, data);
};

export const updateBoard = async (data, id) => {
  return await axiosInstance.patch(PATH.BOARD_UPDATE + '/' + id, data);
};

export const deleteBoard = async (id) => {
  return await axiosInstance.delete(PATH.BOARD_DELETE + '/' + id);
};
