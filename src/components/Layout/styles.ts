import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  /* Permi utilizar os componentes de forma horizontal */
  display: flex;
  /* Alinha os componentes no meio da tela */
  justify-content: center;
`;
