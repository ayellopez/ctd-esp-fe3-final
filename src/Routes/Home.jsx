import React, {useContext} from 'react';
import Card from '../Components/Card'
import {ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { data } = state;

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((dentist) => (
          <Card name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home