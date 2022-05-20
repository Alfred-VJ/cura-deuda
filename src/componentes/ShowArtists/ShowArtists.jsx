import { useSelector, useDispatch } from 'react-redux';
import './ShowArtists.css'
import imgLoading from './img/notas_music.png'
import { useEffect } from 'react';
import { activarMenu } from '../redux/actions/actions';



const ShowArtists = () => {
    const { artists } = useSelector(state => state)
    const dispatch = useDispatch();

    //Este Bloque permite montar la barra de navegación si el usuario recarga la página
    useEffect(() => {
        dispatch(activarMenu())
    }, [])

    return (
        <div className='contShow'>
            {

                //Estas condicionales son para renderizar el "icono de loading", "si no hay resultados" o "el resultado de la búsqueda". Además en la línea 29 renderizo secciones del texto para separarlo en párrafos.
                artists.artists === null ? <h1 className='h1DiscErr'>No hay coincidencias</h1> : !artists.artists ? <div className='contLoading'><img className='imgLoading' src={imgLoading} /></div> : artists.artists?.map(e => {
                    return (
                        <div key={e.idArtist}>
                            <img className='imgPrinArtis' src={e.strArtistBanner} alt="" />
                            <img className='imgLogoArt' src={e.strArtistLogo} alt="" />
                            <div className='pShow'>{
                                e.strBiographyEN?.split('. ').map((e, i) => {
                                    return <p key={i}>{e}.</p>
                                })
                            }</div>

                            <div className='imagenesShow'>
                                <img className='img2' src={e.strArtistClearart} alt="" />
                                <img className='img2' src={e.strArtistWideThumb} alt="" />
                                <img className='img2' src={e.strArtistFanart} alt="" />
                                <img className='img2' src={e.strArtistFanart2} alt="" />
                                <img className='img2' src={e.strArtistFanart3} alt="" />
                                <img className='img2' src={e.strArtistFanart4} alt="" />
                            </div>
                        </div>
                    )
                })

            }
        </div>

    )
}

export default ShowArtists;