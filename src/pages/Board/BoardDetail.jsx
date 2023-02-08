import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteBoard, getBoardDetail } from 'api/board';
import { FaHeart } from 'react-icons/fa';
import { formatDate } from 'utils/formats';
import Comments from 'components/Comment/Comments';
import { authState } from 'atoms/auth';
import { useRecoilState } from 'recoil';
import SignModal from 'components/SignModal/SignModal';

const BoardDetail = () => {
  const [board, setBoard] = useState({});
  let { state: id } = useLocation();
  const [auth, setAuth] = useRecoilState(authState);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getBoardDetail(id);
        setBoard(data);
        // setLike(board.like);
      } catch (error) {
        alert('게시물 상세를 조회하지 못했습니다.');
      } finally {
      }
    }
    getData();
  }, []);

  const handleThumb = () => {};
  const handleDelete = async () => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      try {
        await deleteBoard(id);
        alert('삭제가 완료되었습니다.');
        navigate('/board');
      } catch (error) {
        alert('게시물을 삭제하지 못했습니다.');
      } finally {
      }
    }
  };
  const handleUpdate = () => {
    navigate('/board/modify', { state: board });
  };

  return (
    <DetailContainer>
      <SubContainer>
        <UserInfo>
          <Avvvatars size={'50'} value={board.userId} style="shape" />
          <InfoWrap>
            <Text>{board.writer}</Text>
            <Text>{board.createdDate && formatDate(board.createdDate)}</Text>
          </InfoWrap>
          {board.userId === auth.loggedUser.id && (
            <>
              <TextButton onClick={handleUpdate}>수정</TextButton>
              <TextButton onClick={handleDelete}>삭제</TextButton>
            </>
          )}
        </UserInfo>
        <ThumbWrap>
          <FaHeart size="26" onClick={handleThumb} />
          <Text>{board.thumb}</Text>
        </ThumbWrap>
      </SubContainer>
      <Title>{board.title}</Title>
      <Content>{board.content}</Content>
      <Comments setModalOpen={setModalOpen} boardId={id} />
      {modalOpen ? <SignModal setModalOpen={setModalOpen} modalType={'Login'} /> : null}
    </DetailContainer>
  );
};

export default BoardDetail;

const DetailContainer = styled.div`
  margin: 0 auto;
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.8rem 0 3.4rem 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Text = styled.span`
  color: rgb(55, 65, 82);
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
`;

const ThumbWrap = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  width: fit-content;
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 2;
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
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 40px;
    height: 12px;
    width: 1px;
    background-color: #888888;
  }
  &:last-child::after {
    content: none;
  }
`;
