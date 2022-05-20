import './Discography.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showAlbum, activarMenu } from '../redux/actions/actions.js'


const Discography = () => {
    const { discography, artists, show } = useSelector(state => state);
    const [albumId, setAlbumId] = useState('')
    const dispatch = useDispatch();

    //Este Bloque permite montar la barra de navegación si el usuario recarga la página
    useEffect(() => {
        dispatch(activarMenu())
    }, [])


    const onAlbum = (e) => {
        dispatch(showAlbum()) //Cambio el estado de show a true para que se renderice la info del álbum
        setAlbumId(e.target.value)

    }

    return (
        <div className='contDiscPrin'>
            <h1 className='h1Disc'>Discografía</h1>
            <div className='contBtn'>
                {
                    discography.album?.map(e => {
                        return (
                            <button
                                key={e.idAlbum}
                                className='btnDiscoS'
                                value={e.idAlbum}
                                onClick={onAlbum}
                            >{e.strAlbum}</button>
                        )
                    })
                }
            </div>

            <div className='contArtDisc'>

                {
                    discography?.length === 0 ? <h1 className='h1DiscErr'> Primero genera la busqueda de un artista</h1> :
                        !show ? <div>
                            <h4 className='h4Disco'>Aqui podras encontrar discografía de tu artista favorito</h4>
                            <img className='imgAlbum' src={artists.artists[0]?.strArtistWideThumb} alt="" />
                        </div> : <div className='contAlbumSuper'>
                            {
                                <div className='contAlbum'>
                                    <img className='imgAlbum2' src={discography.album?.filter(e => e.idAlbum === albumId)[0]?.strAlbumThumb} alt="Foto de ALbum" />
                                    <div className='contTextAlbum'>
                                        <p className='pAlbum'>{discography.album?.filter(e => e.idAlbum === albumId)[0]?.strDescriptionEN}</p>
                                    </div>
                                </div>
                            }
                        </div>

                }
            </div>

        </div>
    )
}

export default Discography