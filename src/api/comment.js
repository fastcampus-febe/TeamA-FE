import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const getCommentList = async (data) => {
  try {
    const response = await axiosInstance.get(PATH.COMMENT_LIST, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (data) => {
  try {
    const response = await axiosInstance.post(PATH.COMMENT_INSERT, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateComment = async (data) => {
  try {
    const response = await axiosInstance.patch(PATH.COMMENT_UPDATE, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (data) => {
  try {
    const response = await axiosInstance.delete(PATH.COMMENT_DELETE, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
