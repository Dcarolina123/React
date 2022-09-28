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
        <h1 className='tittle'>DETALLE DEL PERSONAJE</h1>
        <div className='container_imagen'>
            <img src={Image7}/>
        </div>
            <div className="ms-4">
                {
                filtro.map((people) => (
                <div className="row mt-4" key={people.name} >
                    <div className="col-md-6">

                      <p><b className='card-tittle'>Creado:</b> {people.created}</p>
                      <p><b className='card-tittle'>Año de nacimiento:</b> {people.birth_year}</p>
                      <p><b className='card-tittle'>Altura:</b> {people.height} cm</p>
                      <p><b className='card-tittle'>Peso:</b> {people.mass} kg</p>
                      <p><b className='card-tittle'>Genero:</b> {people.gender}</p>
                      <p><b className="text-warning">Editado:</b> {people.edited}</p>
                      <p><b className="text-warning">Color de ojos:</b> {people.eye_color}</p>
                      <p><b className="text-warning">Color de cabello:</b>{people.hair_color}</p>
                      <p><b className="text-warning">Color de piel:</b> {people.skin_color}</p>
                    </div>
                    
                </div>
                ))}
            </div>
        </div>
        
            )
        }

export default Detalles

