import { useSelector } from 'react-redux';
import './ShowArtists.css'
import imgLoading from './img/notas_music.png'




const ShowArtists = () => {
    const { artists } = useSelector(state => state)
    const h = true
    console.log(artists.artists === null)


    return (
        <div className='contShow'>
            {


                artists.artists === null ? <h1>No hay coincidencias</h1> : !artists.artists ? <div className='contLoading'><img className='imgLoading' src={imgLoading} /></div> : artists.artists?.map(e => {
                    return (
                        <div key={e.idArtist}>
                            <img src={e.strArtistBanner} alt="" />
                            <img className='imgLogoArt' src={e.strArtistLogo} alt="" />
                            <div className='pShow'>{
                                e.strBiographyES?.split('. ').map((e, i) => {
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