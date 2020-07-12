import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  /* Caso tenha a propriedade outlined ficará com fundo transparente */
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  /* Caso tenha a propriedade outlined ficará com a cor twitter */
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  /* Caso tenha a propriedade outlined ficará com a borda e na cor twitter */
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  /* Caso tenha a propriedade outlined com hover mais escuro */
  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`;
