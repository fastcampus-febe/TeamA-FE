import Button from 'components/common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to="/">
        <Button text="Home" width={'6rem'} />
      </Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 40vh;
`;

export default NotFound;
