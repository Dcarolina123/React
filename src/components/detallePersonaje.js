import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../hooks/UsePerson2';
import Films from './Films';

const Detalles = () => {
  const [ data, setData ] = useState([]);

  const idParam = useParams();
  const personaje = unicoPersonaje(idParam.name);

  useEffect(() =>{
    personaje.then(res => setData(res))
  }, [personaje])

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <h1>{data.height}</h1>
        <h1>{data.mass}</h1>
        <h1>{data.hair_color}</h1>
      </div>

      <div>
        {
          data?.films?.map((item1, index1) => {
            return <Films url={item1} key={index1}/>
          })
        }
      </div>
    </div>
  )
}

export default Detalles