import { axiosInstance } from './core';
import { PATH } from '../constants/path';

export const getCommentList = async (boardId) => {
  return axiosInstance.get(PATH.BOARD + boardId + PATH.COMMENT_LIST);
};

export const createComment = async (data, boardId) => {
  return axiosInstance.post(PATH.BOARD + boardId + PATH.COMMENT_INSERT, data);
};

export const updateComment = async (data, boardId, id) => {
  return axiosInstance.patch(PATH.BOARD + boardId + PATH.COMMENT_UPDATE + id, data);
};

export const deleteComment = async (boardId, id) => {
  return axiosInstance.delete(PATH.BOARD + boardId + PATH.COMMENT_DELETE + id);
};
