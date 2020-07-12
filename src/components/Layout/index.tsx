import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    /* Toda a tela */
    <Container>
      {/* Parte que fica por volta da aplicação */}
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
