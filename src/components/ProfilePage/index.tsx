import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar pefil</EditButton>

        <h1>Yuri Palacio</h1>
        <h2>@yuripalacio</h2>

        <p>
          Developer at{' '}
          <a href="https://www.linkedin.com/in/yuri-palacio/">em busca...</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 04 de janeiro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            segundo <strong>238</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
