import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function Template({ children }) {
  return (
    <TemplateContainer>
      <HeaderContainer>
        <Logo>
          <Link to="/">Travel</Link>
        </Logo>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
        <Menu>
          <Link to="/board">Board</Link>
          <Link to="/mypage/like">Mypage</Link>
        </Menu>
      </HeaderContainer>
      <ChildContainer>{children}</ChildContainer>
    </TemplateContainer>
  );
}

export default Template;

const TemplateContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  box-sizing: border-box;
  z-index: 1;
  width: 100%;
  height: 5rem;
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
  position: fixed;
  top: 0;
  background-color: #fff;
`;

const Logo = styled.div`
  & a {
    ${({ theme }) => {
      return css`
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.base};
        font-weight: ${theme.fonts.weight.bold};
      `;
    }}
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;

const ChildContainer = styled.div`
  width: 100vw;
  /* padding: 0 5rem; */
  margin-top: 5rem;
  box-sizing: border-box;
`;
