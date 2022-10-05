const unicoPersonaje = async (id) => {
    const peticion = await fetch(`https://swapi.dev/api/people/${id}/`)
    const data = peticion.json()
    return data
}

export{
    unicoPersonaje
}