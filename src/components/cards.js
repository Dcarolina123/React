import React from 'react'
import Card from './card'
import image4 from '../img/imagen4.jpg'
import image5 from '../img/imagen5.jpg'
import image6 from '../img/imagen6.jpg'

const cards = [
    {
        id: 1,
        title: 'The Empire Strikes Back',
        text: 'Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes.',
        Image: image4
    },
    {
        id: 2,
        title: "Darth Vader",
        text: 'Anakin Skywalker, más tarde Darth Vader, es el personaje central de la famosa saga de Star Wars del director George Lucas.',
        Image: image5

    },
    {
        id: 3,
        title: 'The Last Jedi',
        text: 'La Primera Orden ha acorralado a los últimos miembros de la resistencia.',
        Image: image6

    },
]

function Cards(){
    console.log(Cards)
    return (
        <div className='container'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title={card.title} text={card.text} Image={card.Image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards