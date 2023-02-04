import { atom } from 'recoil';
import Router from 'routes/Router';
import GlobalStyle from 'style/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { getItem } from 'utils/storage';
import { theme } from 'utils/theme';
import './App.css';

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: getItem('token') ? true : false,
    loggedUser: getItem('user', {}),
    userToken: getItem('token'),
  },
});

function App() {
  return (
    <AppGrid>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppGrid>
  );
}

const AppGrid = styled.div`
  display: grid;
`;

export default App;
