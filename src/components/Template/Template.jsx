// import { Logo, SearchBar, UserNav } from '@/components/TemplateHeader';
import styled, { css } from 'styled-components';

function Template({ children }) {
  return (
    <StyledTemplate>
      <StyledHeaderContainer>
        <div>Logo</div>
        <div>SearchBar</div>
        <div>UserNav</div>
        {/* <Logo />
        <SearchBar />
        <UserNav /> */}
      </StyledHeaderContainer>
      <StyledChildContainer>{children}</StyledChildContainer>
    </StyledTemplate>
  );
}

export default Template;

const StyledTemplate = styled.div`
  width: 100vw;
  height: 100%;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  height: 5rem;
  box-shadow: none;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.primary};
    `;
  }}
`;

const StyledChildContainer = styled.div`
  width: 100vw;
  /* padding: 0 5rem; */
  box-sizing: border-box;
`;
