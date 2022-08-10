import React, {useEffect} from "react"
import { usePerson } from "../hooks/usePerson"

export const Personajes = () => {

    const { getAllPerson, dataPeople }  = usePerson(); 
    useEffect(() => {
        getAllPerson();
        console.log(getAllPerson(dataPeople));
    },[])

        return (
            <div className='container'>
                <div className='row'>
                    { 
                        dataPeople.map(Personajes => (
                        <div className='col-md-4' key={Personajes.id}>
                            <Personajes name={Personajes.name} height={Personajes.height}/>
                        </div>
                        ))
                    }
                </div>
            </div>  
        )
    }

    export default Personajes;