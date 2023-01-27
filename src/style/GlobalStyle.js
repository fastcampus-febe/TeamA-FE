import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    a {
      text-decoration: none;
    }

    ${({ theme }) => {
      return css`
        body {
          background-color: theme.colors.white;
        }
      `;
    }}
`;

export default GlobalStyle;
