import React from 'react';
import Home from './components/pages/Home';
import * as ROUTES from './constants/Router';
import { BrowserRouter, Switch } from 'react-router-dom';

import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { Browse } from './components/pages/Browse';
import IsUserRedirect from './helpers/Routes';
import { ProtectRoutes } from './helpers/Routes';
import useAuthListener from './hooks/useAuthantication';
const App = () => {
  let { user } = useAuthListener();
  console.log(user);
  return (
    <BrowserRouter>
      <Switch>
        <ProtectRoutes path={ROUTES.HOME} user={user} exact>
          <Home />
        </ProtectRoutes>

        <IsUserRedirect
          path={ROUTES.SIGN_IN}
          user={user}
          logginPath={ROUTES.BROWSE}
          exact
        >
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect
          path={ROUTES.SIGN_UP}
          user={user}
          logginPath={ROUTES.BROWSE}
          exact
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectRoutes path={ROUTES.BROWSE} user={user} exact>
          <Browse />
        </ProtectRoutes>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
