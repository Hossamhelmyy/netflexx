import React, { useState } from 'react';
import {
  Container,
  Background,
  ButtonLink,
  Logo,
  Feature,
  Text,
  FeatureCallOut,
  Dropdown,
  Picture,
  Profile,
  Group,
  Search,
  SearchIcon,
  SearchInput,
  Link,
  PlayButton,
} from './styles/Header';
import { Link as ReachRouterLink } from 'react-router-dom';

export function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive(searchActive => !searchActive)}
        data-testid="search-click"
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.Frame = function HeaderFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, to, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut>{children}</FeatureCallOut>;
};
Header.Logo = function HeaderLogo({ to, ...rest }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...rest} />
    </ReachRouterLink>
  );
};
Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
