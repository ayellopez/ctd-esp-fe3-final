import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [alert,setAlert] = useState(false);
  const [send,setSend] = useState(false);
  const [mensajeAlerta,setMensajeAlerta] = useState("");
  
  const handleChangeName = (event)=>{
      setName(event.target.value)
  };
  const handleChangeEmail = (event)=>{
      setEmail(event.target.value)
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(name.length <= 6 || name[0] === " "){
        setAlert(true)
        setMensajeAlerta("Verifique la información ingresada")
    }
    if (name.length >= 7 && name[0] !== " ") {
        setAlert(false)
        setSend(true)
        setMensajeAlerta("")
    }
};

  return (
    <div className="form-container" >
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label className=''>Nombre completo: </label>
        <input   
        type="text"
        id="nombre"
        name="nombre"
        placeholder= "Nombre" 
        onChange={handleChangeName} 
        value={name} required/>

        <label className=''>email: </label>
        <input  
        type="email"
        id="email"
        name="email"
        placeholder ="email"
        onChange={handleChangeEmail} 
        value={email} required/>
        </div>

        <div>
        <button type="submit">Enviar</button>
            {alert && <div className='mt-2 mb-2 text-red-600'>{mensajeAlerta}</div>}
            {send && <div className='mt-2 mb-2 text-red-600'>{`su registro fue exitoso ${name}`}</div>}
        </div>
      </form>
    </div>
  );
};

export default Form;