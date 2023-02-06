import React from 'react';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { formatDate } from 'utils/formats';
import { useNavigate } from 'react-router-dom';
import { deleteComment } from 'api/comment';

const CommentItem = ({ data: { id, content, writer, member_id, createdDate, modifiedDate } }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await deleteComment(id);
        alert('삭제가 완료되었습니다.');
        navigate(`/board/${id}`);
      } catch (error) {
        alert('댓글을 삭제하지 못했습니다.');
      } finally {
      }
    }
  };
  const handleUpdate = () => {};

  return (
    <CommentContainer>
      <SubContainer>
        <UserInfo>
          <FlexWrap>
            <Avvvatars size={'50'} value={member_id} style="shape" />
            <InfoWrap>
              <Text>{writer}</Text>
              <Text>{createdDate && formatDate(createdDate)}</Text>
              {modifiedDate && <Text>수정됨</Text>}
            </InfoWrap>
          </FlexWrap>
          <FlexWrap>
            {/* {tempData.member_id === auth.loggedUser.id && ( */}
            <TextButton onClick={handleUpdate}>수정</TextButton>
            <TextButton onClick={handleDelete}>삭제</TextButton>
            {/* )} */}
          </FlexWrap>
        </UserInfo>
      </SubContainer>
      <Content>{content}</Content>
    </CommentContainer>
  );
};

export default CommentItem;

const CommentContainer = styled.div`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dddddd;
  }
  &:last-child::after {
    content: none;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  color: rgb(55, 65, 82);
  font-size: 14px;
  display: flex;
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 2;
  margin-bottom: 2rem;
`;

const TextButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
