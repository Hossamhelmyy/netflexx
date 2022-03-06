import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import { GlobalStyle } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './store/Firebase-context';
ReactDom.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
