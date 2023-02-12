import React from 'react';
import { theme } from 'style/theme';
import styled from 'styled-components';
import { SyncLoader } from 'react-spinners';

const Loading = () => {
  return (
    <LoadingContainer>
      <StyledLoading>
        <SyncLoader color={theme.colors.primary} />
      </StyledLoading>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
