import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CommentItem from './CommentItem';

const Comments = () => {
  const [comments, setComments] = useState({});
  let { state: id } = useLocation();

  useEffect(() => {
    async function getData() {
      try {
        // const data = await getCommentList(id);
        // setBoard(data.board_data);
        setComments(tempData);
      } catch (error) {
        alert('게시물 댓글 목록을 조회하지 못했습니다.');
      } finally {
      }
    }
    getData();
  }, []);

  return (
    <div>
      {Array.isArray(comments) ? (
        comments.map((item) => {
          <CommentItem data={item} />;
        })
      ) : (
        <div>작성된 댓글이 없습니다.</div>
      )}
    </div>
  );
};

export default Comments;

const tempData = {};
