import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { formatDate } from 'utils/formats';
import { useNavigate } from 'react-router-dom';
import { deleteComment, updateComment } from 'api/comment';
import { theme } from 'style/theme';
import Button from 'components/common/Button';
import TextArea from 'components/common/TextArea';
import { useRecoilState } from 'recoil';
import { authState } from 'atoms/auth';

const CommentItem = ({ data: { id, content, writer, member_id, createdDate, modifiedDate } }) => {
  const navigate = useNavigate();
  const [isModify, setIsModify] = useState(false);
  const [auth, setAuth] = useRecoilState(authState);
  const [comment, setComment] = useState(content);
  const [updateComment, setUpdateComment] = useState();
  const [message, setMessage] = useState('');

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

  const handleUpdate = async () => {
    if (!updateComment) return setMessage('댓글 내용을 작성해 주세요.');
    try {
      const requestBody = { updateComment };
      // await updateComment(requestBody);

      setIsModify(false);
      setComment(updateComment);
    } catch (error) {
      alert('댓글을 수정하지 못했습니다.');
    } finally {
    }
  };

  useEffect(() => {
    if (isModify) return setUpdateComment(comment);
    if (!isModify) return setMessage('');
  }, [isModify]);

  return (
    <CommentContainer>
      {isModify ? (
        <div>
          <CommentWrap>
            <TextAreaWrap>
              <Avvvatars value={member_id} style="shape" size="40" />
              <TextArea height="50px" text={updateComment} setText={setUpdateComment} />
            </TextAreaWrap>
            <ButtonWrap>
              <SpanText>{message}</SpanText>
              <Button
                text="취소"
                width="80px"
                height="40px"
                fontSize="14px"
                onClick={() => setIsModify(false)}
              />
              <Button
                text="수정 완료"
                width="110px"
                height="40px"
                fontSize="14px"
                onClick={handleUpdate}
              />
            </ButtonWrap>
          </CommentWrap>
        </div>
      ) : (
        <>
          <SubContainer>
            <UserInfo>
              <FlexWrap>
                <Avvvatars size={'50'} value={member_id} style="shape" />
                <InfoWrap>
                  <Text>{writer}</Text>
                  <Text>{createdDate && formatDate(createdDate)}</Text>
                  {modifiedDate && <Text color={theme.colors.primary}>수정됨</Text>}
                </InfoWrap>
              </FlexWrap>
              <FlexWrap>
                {/* {tempData.member_id === auth.loggedUser.id && ( */}
                <TextButton onClick={() => setIsModify(true)}>수정</TextButton>
                <TextButton onClick={handleDelete}>삭제</TextButton>
                {/* )} */}
              </FlexWrap>
            </UserInfo>
          </SubContainer>
          <Content>{comment}</Content>
        </>
      )}
    </CommentContainer>
  );
};

export default CommentItem;

const CommentContainer = styled.div`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
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

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.4rem;
`;

const TextAreaWrap = styled.div`
  display: flex;
  gap: 2rem;
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

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Text = styled.span`
  color: ${({ color }) => (color ? color : '#3e3e3e')};
  font-size: 14px;
  display: flex;
  position: relative;
  &::after {
    content: '';
    position: relative;
    top: 10px;
    left: 7px;
    width: 2px;
    height: 2px;
    background-color: #888888;
  }
  &:last-child::after {
    content: none;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 0.4rem;
  position: relative;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 2;
  margin-bottom: 1.8rem;
`;

const TextButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #3e3e3e;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:first-child::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 40px;
    height: 12px;
    width: 1px;
    background-color: #888888;
  }
`;
