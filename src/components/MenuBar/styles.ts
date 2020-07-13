import styled, { css } from 'styled-components';

import {
  HomeCircle,
  Notifications,
  Email,
  FavoriteBorder,
  FileList2,
  Person,
  MoreHorizontalOutline,
  ExitToApp,
  Twitter,
  Hash,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  /* A partir de 500px a div aparecerá */
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Faz com que a div fique fixa na tela mesmo quando há scroll */
    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* A partir de 1280px, alinha os itens a esquerda */
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 30px;
  height: 30px;

  > path {
    fill: var(--white);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  /* Faz com que os botões não fiquem comprimidos conforme o tamanho
  da tela mude */
  flex-shrink: 0;

  > span {
    display: none;
  }

  /* A partir de 1280px será exibida a descrição ao lado dos botões */
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  /* A partir do segundo botão */
  & + button {
    margin-top: 16px;
  }

  /* Aplicado somente ao ultimo botão */
  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    /* A partir de 1280px o botão "volta ao normal" */
    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 26px;
  height: 26px;
  color: var(--white);
`;

export const HomeIcon = styled(HomeCircle)`
  ${iconCSS}
`;

export const HashIcon = styled(Hash)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ListIcon = styled(FileList2)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const MoreIcon = styled(MoreHorizontalOutline)`
  ${iconCSS}
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
