import React from 'react';
import '../../styles/sass/card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <li className="card">
      <a href={`/logements/${id}`}>
        <figure className="card_figure">
          <img src={cover} alt={title} className="card_figure_img" />
          <figcaption className="card_figure_figcaption">
            <h2 className="card_figure_figcaption_title">{title}</h2>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

export default Card;
