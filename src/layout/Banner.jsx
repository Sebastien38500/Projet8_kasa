import React from 'react';
import '../styles/sass/topbanner.scss';

const Banner = ({ title, src }) => (
  <div className="banner">
    <h1 className="banner_title">{title}</h1>
    <img src={src} alt={`${title} banner`} className="banner_img" />
  </div>
);

export default Banner;

