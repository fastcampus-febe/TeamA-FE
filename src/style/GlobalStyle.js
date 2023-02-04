import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    a {
      text-decoration: none;
    }

    input[type='checkbox']{
      width: 16px;
      height: 16px; 
      cursor: pointer;
    }

    ${({ theme }) => {
      return css`
        body {
          background-color: theme.colors.white;
          font-family: 'Cereal', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          line-height: 23px;
          overflow-x: hidden;
        }
      `;
    }}
`;

export default GlobalStyle;
