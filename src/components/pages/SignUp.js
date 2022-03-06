import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/Firebase-context';
import { Form } from '../form/index';
import HeaderContainer from '../../containers/Header';
import { FooterContainer } from '../../containers/Footer';
import * as ROUTES from '../../constants/Router';

export function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const returnCollection = () => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: `${Math.floor(Math.random() * 5) + 1}`,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch(error => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  const handleSignup = event => {
    event.preventDefault();
    if (
      firstName.length > 2 &&
      password.length > 7 &&
      emailAddress.length > 6 &&
      emailAddress.includes('@') &&
      emailAddress.includes('.com')
    ) {
      setInvalid(false);
      returnCollection();
    } else {
      setErrorMessage(
        'You Should Use Valid Username And Email And Create Strong Password Please Try Again!'
      );
      setInvalid(true);
    }
  };

  return (
    <>
      <HeaderContainer btn={false}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            {invalid && (
              <p
                style={{ color: 'red', marginTop: '-17px', fontWeight: 'bold' }}
              >
                {errorMessage}
              </p>
            )}
            <Form.Submit type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
