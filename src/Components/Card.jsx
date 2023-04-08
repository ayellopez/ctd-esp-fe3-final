import React, { useContext }from "react";
import { Link } from "react-router-dom";
import {ContextGlobal } from "../Components/utils/global.context";


const Card = ({ name, username, id }) => {
  const {addFav } = useContext(ContextGlobal).providerValue;
 
  // Aqui iria la logica para agregar la Card en el localStorage
  
    const addFavorito = () => {
      addFav({ id, name, username });
    };


  return (
  <Link to={`/dentist/${id}`} >
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="images/doctor.jpg" alt="Imagen odontologo"></img>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{id}</p>
      
        <button onClick={addFavorito} className="favButton">Add fav</button>
    </div>
    </Link>
  );
  };
export default Card;