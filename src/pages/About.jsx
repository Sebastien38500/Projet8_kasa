import React from 'react';
import Footer from '../layout/Footer';
import AboutBanner from '../components/about/AboutBanners';
import AboutContents from '../components/about/AboutContents';

const About = () => {
  try {
    return (
      <div>
        <AboutBanner />
        <AboutContents />
        <Footer />
      </div>
    );
  } catch (error) {
    return <div>Une erreur est survenue.</div>;
  }
};

export default About;


