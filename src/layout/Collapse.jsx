import { useState } from "react";
import "../styles/sass/deroulant.scss";
import chevrondrop from "../images/chevrondrop.png";

function Collapse(props) {
  // Définition de l'état local `isOpen` pour gérer l'affichage du contenu
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapsibles">
      <div className="collapsibles_container">
        <p>{props.title}</p> {/* Affichage du titre */}

        <button
          className="collapsibles_container_button"
          onClick={() => setOpen(!isOpen)} // Changement de l'état `isOpen` lors du clic
        >
          <img
            src={chevrondrop}
            className="collapsibles_icon_image"
            alt="collapse icon"
            // Rotation de l'icône en fonction de l'état `isOpen`
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(-135deg)" }}
          />
        </button>
      </div>
      {/* Affichage conditionnel du contenu en fonction de l'état `isOpen` */}
      {isOpen && (
        <div className="collapsibles_content">
          {props.content}
        </div>
      )}
    </div>
  );
}

export default Collapse;

