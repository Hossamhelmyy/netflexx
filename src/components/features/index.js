import React from 'react';
import { Container, Title, SubTitle } from './styles/Features';

export function Features({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Features.Title = function FeaturesTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Features.SubTitle = function FeaturesSubTitle({ children, ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};
