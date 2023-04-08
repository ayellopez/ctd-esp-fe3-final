import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, changeTheme } = useContext(ContextGlobal)

  return (
    <div className='nav-container'>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorit</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <button class="toggle" onClick={changeTheme}>Change theme</button>
    </nav>
    
    </div>
  )
}

export default Navbar