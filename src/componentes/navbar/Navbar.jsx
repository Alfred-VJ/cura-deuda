import { useState } from 'react'
import icoMenu from './img/menu.png'
import nota_music from './img/notas_music.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    const [menu, setMenu] = useState(true)


    const handleChange = (e) => {

    }

    const onClickS = (e) => {

    }

    const activarMenu = () => {
        setMenu(menu ? false : true)
    }

    const ascendente = () => {

    }
    const descendente = () => {

    }

    const populationAsc = () => {

    }
    const populationDesc = () => {

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
                            <h1 className='h1Menu'>Ordenar</h1>
                            <li
                                className='liMenu'
                                onClick={ascendente}
                            >A a Z</li>
                            <li className='liMenu' onClick={descendente}>Albunes</li>
                            <li className='liMenu' onClick={populationAsc}>Población Asc</li>
                            <li className='liMenu' onClick={populationDesc}>Población Desc</li>
                        </ul>
                    </div>
                </div>
                <nav className='navNavbar'>

                    <ul className='ulNavbar'>
                        <Link to='inicio' className='liNavbar'>Inicio</Link>

                    </ul>
                </nav>


            </div>
        </header>
    )
}

export default Navbar