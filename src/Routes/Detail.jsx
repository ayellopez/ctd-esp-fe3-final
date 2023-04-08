import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = useContext(ContextGlobal).providerValue;
  const { data } = state;
  const { id } = useParams();

  const dentist = data.find((dentist) => dentist.id === parseInt(id));
  console.log(data)
  console.log(dentist)
  console.log(id)

  return (
    <div >
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Web: {dentist.website}</p>
    </div>
  )
}

export default Detail