import './Search.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getArtists, dismount, activarMenu } from '../../componentes/redux/actions/actions.js'
import { Link } from 'react-router-dom'




const Search = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    //Este Bloque permite montar la barra de navegación si el usuario recarga la página
    useEffect(() => {
        dispatch(activarMenu())
    }, [])

    //Funciones típicas para los inputs y botones de búsqueda.
    const handleSubmit = (e) => {
        dispatch(dismount())
        dispatch(getArtists(input))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }




    return (
        <div className='contSearch'>

            <input
                type="text"
                placeholder='busca tu banda o artista favorito'
                value={input.name}
                onChange={handleChange}
                className='inputSearch'
            />

            <button className='btnSearch' onClick={handleSubmit}><Link className='linkSearch' to='/artists'>Buscar</Link></button>

        </div>
    )
}

export default Search;