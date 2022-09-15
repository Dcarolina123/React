import React, { useEffect, useState } from 'react'
import Image7 from '../img/imagen7.jpg'
import { usePerson } from "../Hooks/usePerson";
import { useParams } from "react-router-dom";


export const Detalles = () => {
    const { back, getAllPerson, dataPeople } = usePerson();


  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];


  useEffect(() => {

    getAllPerson(numero);

  }, []);


  const filtro = dataPeople.filter((inFilter) => inFilter.name === nombre);

    return (   
    <div className='container'>

 
       <button className='boton_atras'>
                <a href='../Planetas'></a>
            </button>

        <h1 className='tittle'>DETALLE DEL PERSONAJE</h1>

        <div className='container_imagen'>
            <img src={Image7}/>
        </div>
        <div className='text_data'>
        <div className="ms-4 text-warning">
            <h3 className='text'>Nombre: {nombre}</h3>
        </div>
            <div className="ms-4">
                {filtro.map((persona) => (
                <div key={persona.name} className="row mt-4">

                    <div className="col-md-6">
                      <p><b className='card-tittle'>Creado:</b> {persona.created}</p>
                      <p><b className='card-tittle'>Año de nacimiento:</b> {persona.birth_year}</p>
                      <p><b className='card-tittle'>Altura:</b> {persona.height} cm</p>
                      <p><b className="text-warning">Peso:</b> {persona.mass} kg</p>
                      <p><b className="text-warning">Genero:</b> {persona.gender}</p>
                    </div>

                    <div className="col-md-6">
                      <p><b className="text-warning">Editado:</b> {persona.edited}</p>
                      <p><b className="text-warning">Color de ojos:</b> {persona.eye_color}</p>
                      <p><b className="text-warning">Color de cabello:</b> {persona.hair_color}</p>
                      <p><b className="text-warning">Color de piel:</b> {persona.skin_color}</p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
        
    </div>
            )
        }

export default Detalles

