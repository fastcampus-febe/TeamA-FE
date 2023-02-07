import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import Avvvatars from 'avvvatars-react';
import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import { authState } from 'atoms/auth';
import { useRecoilState } from 'recoil';
import { createComment } from 'api/comment';

const Comments = ({ setModalOpen }) => {
  const [comments, setComments] = useState([]);
  let { state: id } = useLocation();
  const [auth, setAuth] = useRecoilState(authState);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

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

  const handleWrite = async () => {
    comment ? setMessage('') : setMessage('댓글 내용을 작성해 주세요.');
    try {
      const requestBody = { comment };
      await createComment(requestBody);

      // const data = await getCommentList(id);
      // setBoard(data.board_data);
      setComments(tempData);
      setComment('');
    } catch (error) {
      alert('댓글을 작성하지 못했습니다.');
    } finally {
    }
  };

  return (
    <div>
      <CommentCnt>{tempData.length}개의 댓글</CommentCnt>
      <CommentContainer>
        {auth.loggedUser.id ? (
          <CommentWrap>
            <TextAreaWrap>
              <Avvvatars value={auth.loggedUser.id} style="shape" size="40" />
              <TextArea height="50px" text={comment} setText={setComment} />
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
              <TextArea height="50px" disabled="true" placeholder="로그인 후 이용해 주세요." />
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
      {Array.isArray(tempData) ? (
        tempData.map((item) => <CommentItem key={item.id} data={item} />)
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

const tempData = [
  {
    id: 1,
    content:
      '댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1',
    writer: '냠냠냠',
    member_id: 'a24123aaa',
    board_id: 1,
    createdDate: '2023-02-03T01:55:27.081136',
    modifiedDate: '2023-02-03T01:57:02.293316',
  },
  {
    id: 2,
    content: '댓글2',
    writer: '하하하',
    member_id: 'asdasd',
    board_id: 1,
    createdDate: '2023-02-03T01:55:27.081136',
    modifiedDate: '2023-02-03T01:57:02.293316',
  },
  {
    id: 3,
    content: '댓글3글3글3글3글3글3글3글3글3글3글3글3글3글3글3글3',
    writer: '흑흑흑kim',
    member_id: 'qewrsd123',
    board_id: 1,
    createdDate: '2023-02-03T01:55:27.081136',
    modifiedDate: '2023-02-03T01:57:02.293316',
  },
];
