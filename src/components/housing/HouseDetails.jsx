import React from 'react';
import { useParams } from 'react-router-dom';
import House from '../../datas/logements';
import Error404 from '../../pages/Error';
import Collapse from '../../layout/Collapse';
import Slideshow from '../../layout/Slideshow';
import Rating from '../../components/housing/Rating';
import '../../styles/sass/housedetail.scss';
import Footer from '../../layout/Footer';

function HouseCards() {
  const { id } = useParams(); // récupère l'id du logement
  const house = House.find((accomodation) => accomodation.id === id); // récupère l'objet en fonction de l'ID

  if (!house) {
    // si on ne trouve pas, on renvoi la page erreur
    return <Error404 />;
  }

  return (
    <section key={house.id} className="housing">
      <Slideshow img={house.pictures} />
      <header className="housing_header">
        <article className="housing_header_infos">
          <h1 className="housing_header_infos_title">{house.title}</h1>
          <h2 className="housing_header_infos_subtitle">{house.location}</h2>
          <div className="housing_header_infos_tags">
            {house.tags.map((tag, index) => (
              <p key={index} className="housing_header_infos_tags_tag">
                {tag}
              </p>
            ))}
          </div>
        </article>
        <div className="housing_header_hoster">
          <div className="housing_header_hoster_infos">
            <p className="housing_header_hoster_infos_name">{house.host.name}</p>
            <img src={house.host.picture} alt="host-cover" className="housing_header_hoster_infos_img" />
          </div>
          <Rating rating={house.rating} />
        </div>
      </header>
      <article className="housing_collapses">
        <div className="housing_collapses_container">
          <Collapse title="Description" content={house.description} />
        </div>
        <div className="housing_collapses_container">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {house.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </article>
      <Footer />
    </section>
  );
}

export default HouseCards;
