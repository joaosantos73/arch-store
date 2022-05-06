import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePerStates';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toogleTheme={toogleTheme}/>
        {/* <Home /> */}
        <Register />
      </ThemeProvider>
    </div>
  );
}

export default App;