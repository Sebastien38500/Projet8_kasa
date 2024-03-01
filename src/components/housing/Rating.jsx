import '../../styles/sass/etoile.scss';
import starActive from '../../images/star.png'; 
import starInactive from '../../images/starinactive.png'; 

// Props : rating (note de 1 à 5)
function Rating({ rating }) {
  const stars = []; // Créer un tableau pour stocker les étoiles
  for (let i = 1; i <= 5; i++) {
    // Boucle pour afficher les étoiles
    stars.push(
      <img
        className="Stars"
        key={i}
        src={i <= rating ? starActive : starInactive} 
        alt={i <= rating ? 'star-filled' : 'star-empty'} 
      />
    );
  }

  return <div className="housing_header_hoster_rating">{stars}</div>; // Retourne les étoiles
}

export default Rating;

