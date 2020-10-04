import React from 'react';

import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, HeaderContent, Profile } from './styles';

import noneUser from '../../assets/none-user.png';
import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="GoBarber" />

        <Profile>
          {user.avatar_url ? (
            <img src={user.avatar_url} alt={user.name} />
          ) : (
            <img src={noneUser} alt={user.name} />
          )}

          <div>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
