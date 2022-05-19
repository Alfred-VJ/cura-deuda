import './Home.css';
import React from 'react'
import { Link } from 'react-router-dom'
import img from './img/music.png'
import { activarMenu } from '../redux/actions/actions.js'
import { useDispatch } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()

    const activar = () => {
        dispatch(activarMenu())
    }
    return (
        <div className='contHome'>
            <div className='contImg'>
                <img className='imgHome' src={img} alt="" />
            </div>
            <div className='contMenuHome'>
                <nav>
                    <ul>
                        <li>
                            <Link onClick={activar} className='linkHome' to='/inicio'>INICIO</Link>
                        </li>
                        <li>
                            <Link onClick={activar} className='linkHome' to='/'>CONTACTO</Link>
                        </li>
                        <li>
                            <Link onClick={activar} className='linkHome' to='/'>SOBRE MI</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Home