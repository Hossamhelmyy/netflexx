import React from 'react';
import HeaderContainer from './Header';
// import * as ROUTES from '../constants/Router';
// import Logo from '../logo.svg';
import { Profiles } from '../components/Profile/index';

export default function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <HeaderContainer bg={false} btn={false} />

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
