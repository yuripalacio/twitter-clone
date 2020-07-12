import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  /* Consumir todo espaço possível */
  display: flex;
  flex-direction: column;

  max-height: 100%;
  /* Possobilita scroll quando for muito grande para ser exibido */
  overflow-y: auto;

  scrollbar-width: none; /** Configuração para o Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  /* Utilizados para o tamanho não diminuir como se estivesse encolhendo */
  flex-shrink: 0;

  width: 100%;
  /* Tamanho fica em 33% do tamanho da tela ou 199px */
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const Avatar = styled.div`
  /** Minimo de 45px e máximo de 135px basedo nos 22% da tela
   * faz com que o avatar fica responsivo
  */
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  /* Só irá funcionar se o elemento pai tiver um position: relative */
  position: absolute;

  /* Maior valor entre -60% e -10% do tamanho da tela */
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  /* Soma de 10% da tela + 7px */
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  /* Consumir o máximo de espaço possível na tela */
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
