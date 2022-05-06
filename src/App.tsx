import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePerStates';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Categories from './components/Categories';

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
        <Categories />
        <div className="content">
          
        </div>

      </ThemeProvider>
    </div>
  );
}

export default App;