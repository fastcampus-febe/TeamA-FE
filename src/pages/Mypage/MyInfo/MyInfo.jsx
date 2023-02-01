import React from 'react';
import styled from 'styled-components';
import InfoProfile from './InfoProfile/InfoProfile';
import PasswordChange from './PasswordChange/PasswordChange';
import Withdrawal from './Withdrawal/Withdrawal';

const MyInfo = () => {
  return (
    <MyInfoContent>
      <InfoProfile />
      <PasswordChange />
      <Withdrawal />
    </MyInfoContent>
  );
};

const MyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default MyInfo;
