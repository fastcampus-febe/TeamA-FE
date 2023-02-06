import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CommentItem from './CommentItem';
import Avvvatars from 'avvvatars-react';
import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import { authState } from 'atoms/auth';
import { useRecoilState } from 'recoil';

const Comments = ({ setModalOpen }) => {
  const [comments, setComments] = useState([]);
  let { state: id } = useLocation();
  const [auth, setAuth] = useRecoilState(authState);

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
      <CommentCnt>{tempData.length}개의 댓글</CommentCnt>
      <CommentContainer>
        {auth.loggedUser.id ? (
          <CommentWrap>
            <TextAreaWrap>
              <Avvvatars value={auth.loggedUser.id} style="shape" size="40" />
              <TextArea height="60px" />
            </TextAreaWrap>
            <ButtonWrap>
              <Button text="댓글 쓰기" width="130px" height="40px" fontSize="15px" />
            </ButtonWrap>
          </CommentWrap>
        ) : (
          <CommentWrap>
            <TextAreaWrap>
              <Avatar src="/images/avatar.png" />
              <TextArea height="60px" disabled="true" placeholder="로그인 후 이용해 주세요." />
            </TextAreaWrap>
            <ButtonWrap>
              <Button
                text="로그인"
                width="130px"
                height="40px"
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
  padding: 1.8rem 1.8rem 1.8rem 1.4rem;
  margin-bottom: 3rem;
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
  gap: 1.4rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
`;

export default Comments;

const tempData = [
  {
    id: 1,
    content:
      '댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1댓글1',
    writer: '냠냠냠',
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
