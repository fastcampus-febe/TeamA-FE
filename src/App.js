import Router from 'routes/Router';
import GlobalStyle from 'style/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import './App.css';

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
