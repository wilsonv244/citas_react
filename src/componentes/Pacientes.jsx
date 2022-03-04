
import { useEffect, useState } from "react";
const Pacientes = ({paciente, setsPaciente,delPaciente,bPaciente}) => {
  const {nombre, propietario, Fecha, email} = paciente;
  const [dPaciente, setdPaciente] = useState({});

 
  return  (
  <div className='bg-white w-full py-10 px-5 rounded-md shadow-md mb-8'>
    <p className='uppercase font-bold'>Nombre: <span className='font-normal normal-case'>{paciente.nombre}</span></p>
    <p className='uppercase font-bold'>Propietario: <span className='font-normal normal-case'>{paciente.propietario}</span></p>
    <p className='uppercase font-bold'>Email: <span className='font-normal normal-case'>{paciente.email}</span></p>
    <p className='uppercase font-bold'>Fecha-Alta: <span className='font-normal normal-case'>{paciente.Fecha}</span></p>
    <p className='uppercase font-bold'>Sintomas: <span className='font-normal normal-case'>
      {paciente.sintomas}</span></p>
    <div className="flex justify-between">
      <button className="p-4 mt-2 bg-green-300 font-bold rounded-xl"
      onClick={()=>{setsPaciente(paciente)}}
      >Editar</button>
      <button className="p-4 mt-2 bg-red-300 font-bold rounded-xl"
      onClick={()=>{delPaciente(paciente)}}
      >Eliminar</button>
    </div>
  </div>
)

};

export default Pacientes;
