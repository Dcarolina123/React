import React, { useEffect, useState } from 'react'
import Image8 from '../img/imagen8.jpg'
import { Link } from 'react-router-dom';

export const Planets = () => {

    const[Planets, setPlanets] = useState([]);
     
      useEffect(() => {
        async function fetchPlanets(){
          const Planetas = await fetch ('https://swapi.dev/api/planets/');
          const data = await Planetas.json();
          setPlanets(data.results);
        }
        fetchPlanets();
      },[]);
   
  return (   
      <div>
           <h1 className='tittle'>Planetas</h1>
           <div className='container d-flex justify-content-center align-items-center h-100'>  
        <div className='row'> 
            {
                Planets.map(Planets =>(
            <div className='col-md-4' key={setPlanets}>
                        <div className='card text-center bg-dark'>
                            <img src={Image8} alt=''className='card-img'></img>
                            <div className='scroll'>
                            <div className='card-body text-light' >
                                <h4 className='card-tittle'>{Planets.name}</h4>
                                <h6 className='card-tittle'>Diamtero:</h6>
                                <p className='card-text text-secondary'>{Planets.diameter}</p>
                                <h6 className='card-tittle'>Clima:</h6>
                                <p className='card-text text-secondary'>{Planets.climate}</p>
                                <h6 className='card-tittle'>Gravedad:</h6>
                                <p className='card-text text-secondary'>{Planets.gravity}</p>
                                <h6 className='card-tittle'>Terreno:</h6>
                                <p className='card-text text-secondary'>{Planets.terrain}</p>
                                <h6 className='card-tittle'>Población:</h6>
                                <p className='card-text text-secondary'>{Planets.population}</p>
                                <h6 className='card-tittle'>Creación:</h6>
                                <p className='card-text text-secondary'>{Planets.created}</p>
                                </div>
                            </div>
                                <Link to={`/detalle/${Planets.name}`} key ={Planets.name}>
                                <a className='btn btn-outline-secondary'>Detalle</a>
                                </Link>
                        </div> 
                    </div> 
                ))
            } 
            </div>
        </div> 
      </div>
   
  )
}

export default Planets