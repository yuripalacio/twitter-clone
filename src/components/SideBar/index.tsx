import React from 'react';
import StickyBox from 'react-sticky-box'; // Faz com que o scroll funcione como o do Twitter

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Yuri Palacio" nickname="@yuripalacio" />,
              <FollowSuggestion name="Yuri Palacio" nickname="@yuripalacio" />,
              <FollowSuggestion name="Yuri Palacio" nickname="@yuripalacio" />,
              <FollowSuggestion name="Yuri Palacio" nickname="@yuripalacio" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
