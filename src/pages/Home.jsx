import React from 'react';
import Footer from '../layout/Footer'; 
import HomeBanner from '../components/home/HomeBanner'; 
import AffichageMaisons from '../components/home/HousesDisplay'; 

const HomePage = () => (
  <div>
    <HomeBanner />
    <AffichageMaisons />
    <Footer/>
  </div>
);

export default HomePage;

