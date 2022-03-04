function Error({mensaje,tipo}) {
  return <div>
    {!tipo ? <p className="text-center font-bold bg-red-400 p-2 rounded-xl mb-4 text-white">{mensaje}</p>  
    :<p className="text-center font-bold bg-green-400 p-2 rounded-xl mb-4 text-white">{mensaje}</p>
     }
  </div>;
}

export default Error;
