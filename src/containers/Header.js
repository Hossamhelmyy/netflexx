import React from 'react';
import { Header } from '../components/header/index.js';
import * as ROUTES from '../constants/Router';
import Logo from '../logo.svg';

export default function HeaderContainer({ children, bg = true, btn = true }) {
  return (
    <Header bg={bg}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflex-logo" src={Logo} />
        {btn && (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
