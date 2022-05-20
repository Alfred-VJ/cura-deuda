import './Discography.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showAlbum } from '../redux/actions/actions.js'


const Discography = () => {
    const { discography, artists, show } = useSelector(state => state);
    const [albumId, setAlbumId] = useState('')
    const dispatch = useDispatch();


    const onAlbum = (e) => {
        dispatch(showAlbum())
        setAlbumId(e.target.value)

    }

    console.log(albumId)

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
                                onClick={onAlbum}
                                value={e.idAlbum}
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
                                    <img className='imgAlbum2' src={discography.album?.filter(e => e.idAlbum === albumId)[0]?.strAlbumThumb} alt="" />
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