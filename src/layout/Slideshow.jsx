import React, { useState } from 'react';
import nextIcon from '../images/next.png';
import backIcon from '../images/back.png';
import '../styles/sass/slideshow.scss';

function SlideShow({ img }) {
  const [current, setCurrent] = useState(0); // Index de l'image actuelle
// Passer à l'image suivante et la fonciton ajuste l'index à 0 si besoin
  const nextSlide = () => {
    setCurrent(current === img.length - 1 ? 0 : current + 1);
  };
  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrent(current === 0 ? img.length - 1 : current - 1);
  };
  // Affichage image into boutton si +1 d'image, into le compteur 1 sur x
  return (
    <div className="container1">
      {img.map((picture, index) => (
        <div key={index} style={{ display: index === current ? 'block' : 'none' }}>
          <img className="container1_images" src={picture} alt={`Logement ${index + 1}`} />
        </div>
      ))}

      {img.length > 1 && (
        <div className="container1_buttons">
          <img src={backIcon} onClick={prevSlide} className="container1_buttons_icon" alt="Précédent" />
          <img src={nextIcon} onClick={nextSlide} className="container1_buttons_icon" alt="Suivant" />
        </div>
      )}

      {img.length > 1 && (
        <div className="container1_counter">
          <p>{current + 1}/{img.length}</p>
        </div>
      )}
    </div>
  );
}

export default SlideShow;
