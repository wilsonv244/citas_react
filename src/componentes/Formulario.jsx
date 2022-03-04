import {useState, useEffect} from "react";
import Error from "./Error";
import Pacientes from "./Pacientes";
function Formulario({paciente, setPaciente,sPaciente, setsPaciente,bPaciente}) {
  let NuevoMensaje;
  const generarId = ()=>{
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);
    return  date + random;
  }
  //BORRAR PACIENTE
  useEffect(()=>{
    if (Object.keys(bPaciente).length>0) {
      console.log(bPaciente);
      const nDatos = paciente.filter(e=>{
        return e.id != bPaciente.id
      });
      
      setPaciente(nDatos);
    }
  },[bPaciente])
  const [nombre, setNombre]=useState('');
  const [propietario, setPropietario]=useState('');
  const [email, setEmail]=useState('');
  const [alta, setAlta]=useState('');
  const [sintomas, setSintomas]=useState('');
  const [error, setError]=useState(false);
  const [exito, setExito]=useState(false);
  const[mensaje,setMensaje] = useState('Guardar');

  useEffect(()=>{
    if (Object.keys(sPaciente).length>0) {5
      setNombre(sPaciente.nombre);
      setPropietario(sPaciente.propietario);
      setEmail(sPaciente.email);
      setAlta(sPaciente.alta);
      setSintomas(sPaciente.sintomas);
      setMensaje("Actualizar Datos");
    }else{
      console.log("No nay nadaxd");
    }
  },[sPaciente])
  useEffect(()=>{
    setMensaje("Guardar");
  },[paciente])
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    //VALIDACION FORMULARIO
    if ([nombre,propietario,email,alta,sintomas].includes('')) {
      console.log('esta Vacio');
      setError(true);
      setExito(false);
    }else{
      console.log('todo lleno');
      setExito(true);
      setError(false);
      const objetoPaciente={
        nombre,propietario,email,alta,sintomas
      }

      console.log(objetoPaciente);
      if (sPaciente.id) {
        //editando
        console.log("Editando")
        console.log(paciente)
        objetoPaciente.id = sPaciente.id
        //verificando si los Id de LP == Formulario
        const nuevosDatos = paciente.map(e=>{
          return e.id === sPaciente.id ? objetoPaciente : e
        })

        console.log(nuevosDatos)
        setPaciente(nuevosDatos)
        setsPaciente({})
      }else{
        //agregando
        objetoPaciente.id = generarId()
        setPaciente([...paciente,objetoPaciente]);
      }
      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')


    }
    //crear un objeto de pacientes:
  }
  return(

    <div className='w-11/12 lg:w-11/12 lg:ml-2'>
        <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
        <p className='mt-5 text-lg text-center'>
          Añade un paciente y {' '}
          <span className='text-indigo-600 font-bold'>Administrarlos</span>
        </p>
        <form action="" className='mt-5 pt-4 bg-white shadow-md rounded-md px-5'
            onSubmit={handleSubmit}
        >
          {error && 
            <Error 
              mensaje={'Llene todos los campos del formulario'}
              tipo={false}
            />
          }
          {exito &&
            <Error
              mensaje={'Enviado Correctamente'}
              tipo={true}
            />

          }

          <div>
            <label htmlFor="mascota" className='block mb-2 text-gray-700 uppercase font-bold'
            >Nombre Mascota</label>
            <input id='mascota' type="text" 
            className='border-2 w-full mb-5 p-2 placeholder-gray-400 rounded-md' 
            placeholder='Nombre de la mascota' value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}


            />
          </div>
          <div>
            <label htmlFor="propietario" className='block mb-2 text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
            <input id='propietario' type="text" className='border-2 w-full mb-5 p-2 placeholder-gray-400 rounded-md' value={propietario} 
            placeholder='Nombre del propietario' onChange={(e)=>{setPropietario(e.target.value)}}

            />
          </div>
          <div>
            <label htmlFor="email" className='block mb-2 text-gray-700 uppercase font-bold'>Correo</label>
            <input id='email' type="email" className='border-2 w-full mb-5 p-2 placeholder-gray-400 rounded-md' 
            placeholder='Correo del propietario' value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="alta" className='block mb-2 text-gray-700 uppercase font-bold'>Alta</label>
            <input id='alta' type="date" className='border-2 w-full mb-5 p-2 placeholder-gray-400 rounded-md' 
            onChange={(e)=>{setAlta(e.target.value)}} value={alta}
            />
          </div>
          <div>
            <label htmlFor="alta" className='block mb-2 text-gray-700 uppercase font-bold'>Describe los sintomas</label>
            <textarea id='alta' type="date" className='border-2 w-full mb-5 p-2 placeholder-gray-400 rounded-md' 
             placeholder='Describe los sintomas'
             onChange={(e)=>{setSintomas(e.target.value)}} value={sintomas}
             />
          </div>
          <button className='w-full bg-indigo-500 text-white p-3 rounded-md font-bold mb-5 transition-all
          hover:bg-indigo-700 uppercase'>{mensaje}</button>
        </form>
    </div>

  );
}

export default Formulario;

