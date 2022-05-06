import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import logo from '../../assets/logo.png'

import { Container, Logo } from './style';

interface Props {
  toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Logo>
        <img src={logo} width={90} height={40} alt="ArchStore"/>
        <h1>Store</h1>
      </Logo>
      <div className="dark-mode">
        <p>Dark mode</p>
        <Switch
          onChange={toogleTheme}
          checked={title==='dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={45}
          handleDiameter={20}
          onColor="#48D06D"
          offColor={shade(0.5, '#48D06D')}
        />
      </div>
    </Container>
  );
};

export default Header;