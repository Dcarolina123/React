import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image8 from '../img/imagen7.jpg'
import { usePlanets } from "../Hooks/useplanets";

export const DetallePlaneta = () => {
    const { back, getAllPlanets,dataPlanets} = usePlanets();
 

    const params = useParams();
    const listParams = [params];
  
    const mapeo = listParams.map((list) => list.linkname);
    const mapeo2 = listParams.map((list) => list.num);
  
    var nombre = mapeo[0];
    var numero = mapeo2[0];
  
    useEffect(() => {
  
      getAllPlanets(numero);
  
    }, []);
  
    const filtro = dataPlanets.filter((inFilter) => inFilter.name === nombre);

    return (
        <div>

            <button className='boton_atras'>
                <a href='../Planetas'>
                </a>
            </button>

            <h1 className='tittle'>DETALLE PLANETAS</h1>

             <div className='container_imagen'>
            <img src={Image8}/>
        </div>
        <div className='text_data'>
        <div className="ms-4 text-warning">
            <h3 className='text'>Nombre: { nombre }</h3>
        </div>
            <div className="ms-4">
                {filtro.map((Planeta) => (
                <div key={Planeta.name} className="row mt-4">

                    <div className="col-md-6">
                      <p><b className='card-tittle'>Periodo de Rotacion: </b>{Planeta.rotation_period}</p>
                      <p><b className='card-tittle'>Peridoo Orbital:</b> {Planeta.orbital_period}</p>
                      <p><b className='card-tittle'>Diametro:</b>{Planeta.diameter}</p>
                      <p><b className="text-warning">Clima:</b> {Planeta.climate} kg</p>
                      <p><b className="text-warning">Gravedad:</b>{Planeta.gravity}</p>
                      <p><b className="text-warning">Terreno:</b>{Planeta.terrain}</p>
                      <p><b className="text-warning">Superficie del Agua: </b>{Planeta.surface_water}</p>
                      <p><b className="text-warning">Poblacion:</b> {Planeta.population}</p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
        
    </div>
            )
        }

export default DetallePlaneta
