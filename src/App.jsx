import {useState, useEffect} from "react"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import ListaPacientes from "./componentes/ListaPacientes"

function App() {
  const [paciente, setPaciente]=useState([]);
  const [sPaciente, setsPaciente] = useState({})
  const [bPaciente, delPaciente] = useState({})
  const [lcStorage, setLS] = useState({})
  useEffect(()=>{
    const showDatosLS = ()=>{
      const pacintesLS = JSON.parse(localStorage.getItem('datosPacientes'))??[];
      setPaciente(pacintesLS);
    }
    showDatosLS();
  },[])

  useEffect(()=>{
    console.log("Cuando este listo o se agraga un nuevo dato");
    localStorage.setItem('datosPacientes', JSON.stringify(paciente));
  },[paciente])
  return (
    <div className="container m-auto mt-6">
      <Header      
      />
      <div className="mt-12 lg:grid lg:grid-cols-2 flex-col justify-center ml-5">
        <Formulario
          setPaciente={setPaciente}
          paciente={paciente}
          setsPaciente={setsPaciente}
          sPaciente = {sPaciente}
          bPaciente={bPaciente}
          />
        <ListaPacientes
          bPaciente={bPaciente}
          setsPaciente={setsPaciente}
          paciente={paciente}
          sPaciente = {sPaciente}
          delPaciente ={delPaciente}

        />
      </div>
    </div>
  )
}

export default App
