import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icoMenu from './img/menu.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { getDiscography, dontShowAlbum } from '../redux/actions/actions.js';




const Navbar = () => {
    const [menu, setMenu] = useState(true) //Me permite ocultar o mostrar el menú desplegable
    const { artists } = useSelector(state => state)
    const dispatch = useDispatch()




    const onClick = () => {
        setMenu({ menu: true })
        dispatch(dontShowAlbum()) //Cambia el estado de show a false para que el componente "Discografy" renderice correctamente
    }

    const activarMenu = () => {
        setMenu(menu ? false : true)
    }

    const goDiscography = () => {
        dispatch(getDiscography(artists.artists[0].idArtist));
        setMenu(menu ? false : true)
    }

    const goArtistas = () => {

    }
    const goVideos = () => {

    }


    return (
        <header className='headerNav'>
            <div className='contNavbar'>
                <div className='liNavbar1'>
                    <img
                        src={icoMenu}
                        alt="s"
                        className='icoMenu'
                        onClick={activarMenu}
                    />
                    <div className={`contMenu  ${menu && 'active'}`}>
                        <ul className='ulMenu'>
                            <h1 className='h1Menu'>Mas de tu artista</h1>
                            <li className='liMenu' onClick={goDiscography}>
                                <Link className='linkMenuHambur' to='/discography'>Discografía</Link></li>
                            <li className='liMenu' onClick={goArtistas}>Artistas</li>
                            <li className='liMenu' onClick={goVideos}>Videos Musicales</li>
                        </ul>
                    </div>
                </div>
                <nav className='navNavbar'>

                    <ul className='ulNavbar'>
                        <Link onClick={onClick} to='inicio' className='liNavbar'>Inicio</Link>

                    </ul>
                </nav>


            </div>
        </header>
    )
}

export default Navbar