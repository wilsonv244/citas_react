import {React, useState, useEffect} from 'react';
import Pacientes from './Pacientes';

const ListaPacientes = ({paciente, setsPaciente,sPaciente, delPaciente,bPaciente}) => {
  const cantDatos = paciente.length
  function valor (valor) {
    if (paciente.length >= valor) {
      return true
    }
    return false
  }
 /* useEffect(()=>{
    if (paciente.length > 0) {
      console.log("Paciente xd");
    }
  }, [sPaciente]);

  useEffect(()=>{
    if (Object.keys(paciente).length>0) {
      console.log("paciente");
    }
  },[paciente])*/
  return(
    <div className='w-11/12 lg:w-full '>
      {paciente && cantDatos ? 
        <>
          <h2 className='text-center font-black text-3xl mt-4'>Listado de pacientes</h2>
          <p className='text-center mt-5 text-xl mb-5'>administra <span className='text-indigo-500 font-bold'>Pacientes y citas</span></p>
        </>
        : 
        <>
          <h2 className='text-center font-black text-3xl mt-4'>No hay pacientes Disponibles</h2>
          <p className='text-center mt-5 text-xl mb-5'>Cuando tenga pacientes: Administra <span className='text-indigo-500 font-bold'>Pacientes y citas</span></p>
        </>
      }
      {paciente && valor(4) ?

        <div className='h-1/2 md:overflow-scroll'>
          {
            paciente.map((paciente)=>

              <Pacientes 
              key={paciente.id}
              paciente={paciente}
              setsPaciente={setsPaciente}
              delPaciente = {delPaciente}
              />
              )
              
            }
        </div>
        :
        <div>
          {
            paciente.map((paciente)=>
            
            <Pacientes 
            setsPaciente={setsPaciente}
            key={paciente.id}
            delPaciente = {delPaciente}
            paciente={paciente}/>
            )
            
          }
        </div>

      }
      
    </div>
  );
};

export default ListaPacientes;
