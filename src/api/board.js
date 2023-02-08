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

export const getBoardListSearch = async (type, data) => {
  try {
    const path = type === 'title' ? PATH.BOARD_SEARCH_TITLE : PATH.BOARD_SEARCH_NICKNAME;
    const response = await axiosInstance.get(path + '/' + data, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getBoardListSort = async (type) => {
  try {
    const path = type === 'recent' ? PATH.BOARD_ORDER_DATE : PATH.BOARD_ORDER_LIKE;
    const response = await axiosInstance.get(path, token);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getBoardDetail = async (id) => {
  try {
    const response = await axiosInstance.get(PATH.BOARD_DETAIL + '/' + id);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const thumbBoard = async (id) => {
  try {
    const response = await axiosInstance.post(PATH.BOARD_THUMB + id);
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

export const updateBoard = async (data, id) => {
  try {
    const response = await axiosInstance.patch(PATH.BOARD_UPDATE + '/' + id, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteBoard = async (id) => {
  try {
    const response = await axiosInstance.delete(PATH.BOARD_DELETE + '/' + id);
    return response;
  } catch (error) {
    console.error(error);
  }
};
