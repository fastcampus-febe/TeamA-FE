import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';
import { formatDate } from 'utils/formats';
import Avvvatars from 'avvvatars-react';
import { useNavigate } from 'react-router-dom';

const BoardItem = ({ data: { id, title, userId, writer, createdDate, comment_cnt, thumb } }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/board/${id}`, { state: id });
  };

  return (
    <BoardItemContainer>
      <BoardTitle onClick={handleClick}>{title}</BoardTitle>
      <BoardInfoContainer>
        <UserInfo>
          <Avvvatars value={userId} style="shape" size="24" />
          <Nickname>{writer}</Nickname>
        </UserInfo>
        <Info>
          <Text>{formatDate(createdDate)}</Text>
          <Text>
            <FaRegCommentDots /> {comment_cnt}
          </Text>
          <Text>
            <FiHeart /> {thumb}
          </Text>
        </Info>
      </BoardInfoContainer>
    </BoardItemContainer>
  );
};

const BoardItemContainer = styled.div`
  padding: 1.4rem 0;
  border-bottom: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BoardTitle = styled.h1`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const BoardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Nickname = styled.span`
  font-weight: 500;
  color: #222222;
  font-size: 14px;
`;

const Info = styled.span`
  display: flex;
  gap: 1rem;
`;

const Text = styled.span`
  color: #717171;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  position: relative;
  &::after {
    content: '';
    position: relative;
    top: 0;
    left: 6px;
    width: 2px;
    height: 2px;
    background-color: #888888;
  }
  &:last-child::after {
    content: none;
  }
`;

export default BoardItem;
