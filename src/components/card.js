import React from 'react'

function Card ({title, Image, text})  {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100 '>
            <div className='row'>
                    <div className='card text-center bg-dark'>
                        <img src={Image} alt=''className='card-img'></img>
                        <div className='card-body text-light' >
                            <h4 className='card-tittle'>{title}</h4>
                                <p className='card-text text-secondary'>{text}</p>
                        </div>
                    </div>  
                </div>
        </div>
        )
    }
    
    export default Card