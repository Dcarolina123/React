import React, { useEffect, useState } from 'react'
import Image7 from '../img/imagen7.jpg'


export const Personajes = () => {

  const[people, setPeople] = useState([]);
   
    useEffect(() => {
      async function fetchPeople(){
        const personaje = await fetch ('https://swapi.dev/api/people/');
        const data = await personaje.json();
        setPeople(data.results);
      }
      fetchPeople();
    },[]);


  return (   
      <div>
          <h1 className='tittle'>Personajes</h1>
          <div className='container d-flex justify-content-center align-items-center h-100'>  
        <div className='row'> 
            {
                people.map(people =>(
                    <div className='col-md-4' key={setPeople}>
                        <div className='card text-center bg-dark'>
                            <img src={Image7} alt=''className='card-img'></img>
                            <div className='scroll'>
                            <div className='card-body text-light' >
                                <h4 className='card-tittle'>{people.name}</h4>
                                <h6 className='card-tittle'>Género:</h6>
                                <p className='card-text text-secondary'>{people.gender}</p>
                                <h6 className='card-tittle'>Nacimiento:</h6>
                                <p className='card-text text-secondary'>{people.birth_year}</p>
                                <h6 className='card-tittle'>Altura:</h6>
                                <p className='card-text text-secondary'>{people.height}</p>
                                <h6 className='card-tittle'>Color de Ojos:</h6>
                                <p className='card-text text-secondary'>{people.eye_color}</p>
                                <h6 className='card-tittle'>Color de Cabello:</h6>
                                <p className='card-text text-secondary'>{people.hair_color}</p>
                                <h6 className='card-tittle'>Peso en KG:</h6>
                                <p className='card-text text-secondary'>{people.mass}</p>
                                <h6 className='card-tittle'>Color de Piel:</h6>
                                <p className='card-text text-secondary'>{people.skin_color}</p>
                                </div>
                            </div>
                        </div> 
                    </div> 
                ))
            } 
            </div>
        </div> 
      </div>
   
  )
}

export default Personajes

