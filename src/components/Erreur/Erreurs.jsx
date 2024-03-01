import { Link } from 'react-router-dom';
import '../../styles/sass/Erreur404.scss';

const ErrorPage = () => (
  <div className="error">
    <h1 className="error_Number">404</h1>
    <p className="error_Text">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="error_Link">Retourner sur la page d’accueil</Link>
  </div>
);

export default ErrorPage;
