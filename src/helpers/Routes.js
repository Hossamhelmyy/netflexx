import { Route, Redirect } from 'react-router-dom';

export default function IsUserRedirect({
  user,
  logginPath,
  children,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: logginPath }} />;
        }

        return null;
      }}
    />
  );
}
export function ProtectRoutes({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect to={{ pathname: 'signin', state: { from: location } }} />
          );
        }
        return null;
      }}
    />
  );
}
