import React from 'react';
import JumbotronContainer from '../../containers/Jumbotron';
import { FooterContainer } from '../../containers/Footer';
import { FaqsContainer } from '../../containers/Faqs';
import HeaderContainer from '../../containers/Header';
import FeaturesContainer from '../../containers/Features';

function Home() {
  return (
    <>
      <HeaderContainer>
        <FeaturesContainer />
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
