import './Search.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtists } from '../../componentes/redux/actions/actions.js'
import {Link} from 'react-router-dom'




const Search = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
          dispatch(getArtists(input))
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }




    return (
        <div className='contSearch'>

            <input
                type="text"
                placeholder='busca tu banda o artista favorita'
                value={input.name}
                onChange={handleChange}
                className='inputSearch'
            />

            <button className='btnSearch' onClick={handleSubmit}><Link className='linkSearch' to='/artists'>Buscar</Link></button>

        </div>
    )
}

export default Search;