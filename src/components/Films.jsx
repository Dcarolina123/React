import React from 'react'
import { useEffect, useState } from 'react'

const Films = ({url}) => {

    const [ data1, setData1 ] = useState([])

    useEffect(() =>{
        fetch(url).then(res => res.json()).then(data1 => setData1(data1))
    }, [url])
  return (
    <div>
        <div>
            <p>Creado: {data1.created}</p>
            <p>Director: {data1.director}</p>
            <p>Editado: {data1.edited}</p>
            <p>Episodio: {data1.episode_id}</p>
            <p>Fecha de lanzamiento: {data1.release_date}</p>
        </div>
    </div>
  )
}

export default Films