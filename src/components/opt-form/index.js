import React from 'react';
import {
  Container,
  Input,
  Break,
  Button,
  Text,
  Wrapper,
  Div,
} from './styles/ObtForm';

export default function OptForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
OptForm.Input = function OptFormInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};
OptForm.Break = function OptFormBreak({ children, ...rest }) {
  return <Break {...rest}>{children}</Break>;
};
OptForm.Button = function OptFormButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};
OptForm.Text = function OptFormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

OptForm.Wrapper = function OptFormWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

OptForm.Div = function OptFormDiv({ children, ...rest }) {
  return <Div {...rest}>{children}</Div>;
};
