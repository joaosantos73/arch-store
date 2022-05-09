import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePerStates';
import { BrowserRouter as Router } from "react-router-dom";
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import Upload from './components/Upload';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
      <Router>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header toogleTheme={toogleTheme}/>
            <Routes/>
        </ThemeProvider>
      </Router>
  );
}

export default App;