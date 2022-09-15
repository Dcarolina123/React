import React, { useEffect, useState } from 'react'
import Image7 from '../img/imagen7.jpg'
import { Link } from 'react-router-dom';


export const Planetas = () => {

    const {getAllPlanets,dataPlanets, Counter, Preview, Next} = usePlanets();
    const [disabledL, setDisabledL] = useState(false);
    const [disabledR, setDisabledR] = useState(false);
  
    useEffect(()=>{
  
      getAllPlanets(Counter);
  
      if(Counter ===6){
        setDisabledR(true);
      } else {
        setDisabledR(false);
      }
  
      if(Counter ===1){
        setDisabledL(true);
      } else {
        setDisabledL(false);
      }
  
    }, [dataPlanets])
    
  return (   
      <div>
           <h1 className='tittle'>Planetas</h1>
          <div className='container d-flex justify-content-center align-items-center h-100'>  
        <div className='row'> 
            {
                Planetas.map(Planetas =>(
                    <div className='col-md-4' key={setPlanetas}>
                        <div className='card text-center bg-dark'>
                            <img src={Image7} alt=''className='card-img'></img>
                            <div className='scroll'>
                            <div className='card-body text-light' >
                                <h4 className='card-tittle'>{planetas.name}</h4>
                                <h6 className='card-tittle'>Periodo de Rotacion:</h6>
                                <p className='card-text text-secondary'>{planetas.rotation_period}</p>
                                <h6 className='card-tittle'>Peridoo Orbital:</h6>
                                <p className='card-text text-secondary'>{planetas.orbital_period}</p>
                                <h6 className='card-tittle'>Diametro:</h6>
                                <p className='card-text text-secondary'>{planetas.diameter}</p>
                                <h6 className='card-tittle'>Clima:</h6>
                                <p className='card-text text-secondary'>{planetas.climate}</p>
                                <h6 className='card-tittle'>Gravedad: </h6>
                                <p className='card-text text-secondary'> {planetas.gravity}</p>
                                <h6 className='card-tittle'>Terreno:</h6>
                                <p className='card-text text-secondary'>{planetas.terrain}</p>
                                <h6 className='card-tittle'>Superficie del Agua:</h6>
                                <p className='card-text text-secondary'>{planetas.surface_water}</p>
                                </div>
                            </div>
                                <Link to={`/Detalleplaneta/${planetas.name}`} key ={planetas.name}>
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

export default Planetas