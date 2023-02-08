import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import Avvvatars from 'avvvatars-react';
import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import { authState } from 'atoms/auth';
import { useRecoilState } from 'recoil';
import { createComment, getCommentList } from 'api/comment';

const Comments = ({ setModalOpen, boardId }) => {
  const [comments, setComments] = useState([]);
  const [auth, setAuth] = useRecoilState(authState);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const data = await getCommentList(boardId);
        setComments(data);
      } catch (error) {
        alert('게시물 댓글 목록을 조회하지 못했습니다.');
      } finally {
      }
    }
    getData();
  }, []);

  const handleWrite = async () => {
    if (!comment) return setMessage('댓글 내용을 작성해 주세요.');
    try {
      const requestBody = { content: comment };
      await createComment(requestBody, boardId);
      setComment('');
      setMessage('');

      const data = await getCommentList(boardId);
      setComments(data);
    } catch (error) {
      alert('댓글을 작성하지 못했습니다.');
    } finally {
    }
  };

  return (
    <div>
      <CommentCnt>{comments.length}개의 댓글</CommentCnt>
      <CommentContainer>
        {auth.loggedUser.id ? (
          <CommentWrap>
            <TextAreaWrap>
              <Avvvatars value={auth.loggedUser.id} style="shape" size="40" />
              <TextArea
                height="60px"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </TextAreaWrap>
            <ButtonWrap>
              <SpanText>{message}</SpanText>
              <Button
                text="댓글 쓰기"
                width="110px"
                height="40px"
                fontSize="14px"
                onClick={handleWrite}
              />
            </ButtonWrap>
          </CommentWrap>
        ) : (
          <CommentWrap>
            <TextAreaWrap>
              <Avatar src="/images/avatar.png" />
              <TextArea height="50px" disabled={true} placeholder="로그인 후 이용해 주세요." />
            </TextAreaWrap>
            <ButtonWrap>
              <Button
                text="로그인"
                width="120px"
                height="40px"
                fontSize="15px"
                onClick={() => setModalOpen(true)}
              />
            </ButtonWrap>
          </CommentWrap>
        )}
      </CommentContainer>
      {Array.isArray(comments) ? (
        comments.map((item) => <CommentItem key={item.id} data={item} boardId={boardId} />)
      ) : (
        <div>작성된 댓글이 없습니다.</div>
      )}
    </div>
  );
};

const CommentCnt = styled.div`
  border-top: 1px solid #dddddd;
  padding: 2rem 0;
`;

const CommentContainer = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: 2rem;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #dddddd;
`;

const TextAreaWrap = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;
`;

const SpanText = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.mini};
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Comments;
