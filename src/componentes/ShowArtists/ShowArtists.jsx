import { useSelector } from 'react-redux';
import './ShowArtists.css'




const ShowArtists = () => {
    const { artists } = useSelector(state => state)

    return (
        <div className='contShow'>
            {
                artists.artists?.map(e => {
                    return (
                        <div key={e.idArtist}>
                            <img src={e.strArtistBanner} alt="" />
                            <img className='imgLogoArt' src={e.strArtistLogo} alt="" />
                            <div className='pShow'>{
                                e.strBiographyES.split('. ').map((e, i) => {
                                    return <p key={i}>{e}.</p>
                                })
                            }</div>

                            {/* <img className='img2' src={e.strArtistCutout} alt="" /> */}
                            <div className='imagenesShow'>
                                <img className='img2' src={e.strArtistClearart} alt="" />
                                <img className='img2' src={e.strArtistWideThumb} alt="" />
                                <img className='img2' src={e.strArtistFanart} alt="" />
                                <img className='img2' src={e.strArtistFanart2} alt="" />
                                <img className='img2' src={e.strArtistFanart3} alt="" />
                                <img className='img2' src={e.strArtistFanart4} alt="" />
                            </div>


                            {/* <a>{e.strLastFMChart}</a> */}
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ShowArtists;