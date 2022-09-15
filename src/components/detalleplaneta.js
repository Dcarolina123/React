import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unicoPlaneta } from '../Hooks/FuncionesPlanets';
import Image7 from '../img/imagen7.jpg'

export const DetallePlaneta = () => {
    const [dato, setDato] = useState([]);

    const idParams = useParams();
    const planeta = unicoPlaneta(idParams.name);

    useEffect(() => { planeta.then(res => setDato(res)) }, []);

    return (
        <div>

            <button className='boton_atras'>
                <a href='../Planetas'>
                </a>
            </button>

            <h1 className='tittle'>DETALLE PLANETAS</h1>

             <div className='container_imagen'>
            <img src={Image7}/>
        </div>
        <div className='text_data'>
        <div className="ms-4 text-warning">
            <h3 className='text'>Nombre: {dato.name}</h3>
        </div>
            <div className="ms-4">
                {filtro.map((Planetas) => (
                <div key={dato.name} className="row mt-4">

                    <div className="col-md-6">
                      <p><b className='card-tittle'>Periodo de Rotacion: </b>{dato.rotation_period}</p>
                      <p><b className='card-tittle'>Peridoo Orbital:</b> {dato.orbital_period}</p>
                      <p><b className='card-tittle'>Diametro:</b>{dato.diameter}</p>
                      <p><b className="text-warning">Clima:</b> {dato.climate} kg</p>
                      <p><b className="text-warning">Gravedad:</b>{dato.gravity}</p>
                      <p><b className="text-warning">Terreno:</b>{dato.terrain}</p>
                      <p><b className="text-warning">Superficie del Agua: </b>{dato.surface_water}</p>
                      <p><b className="text-warning">Poblacion:</b> {dato.population}</p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
        
    </div>
            )
        }

export default DetallePlaneta
