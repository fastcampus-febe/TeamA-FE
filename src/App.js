import Router from 'routes/Router';
import GlobalStyle from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
