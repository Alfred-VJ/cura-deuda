import axios from 'axios';
import {
    GET_ARTISTS,
    GET_DISCOGRAPHY,
    ACTIVAR_MENU,
    SHOW_ALBUM,
    DONT_SHOW_ALBUM,
    DISMOUNT
} from '../actions/typeActions.js';





export const getArtists = (name) => {
    return async (dispatch) => {
        try {
            const civil = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`);

            return dispatch({
                type: GET_ARTISTS,
                payload: civil.data
            })
        } catch (error) { return 'Error al desplegar las civilizaciones' }
    }
}

export const getDiscography = (id) => {
    return async (dispatch) => {
        try {
            const disco = await axios.get(`https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`)

            return dispatch({
                type: GET_DISCOGRAPHY,
                payload: disco.data
            })
        } catch (error) { return 'Error al consultar la discografia del artista' }
    }
}





export const activarMenu =  () => {
    return {
        type: ACTIVAR_MENU,
    }
}

export const showAlbum = () => {
    return {
        type: SHOW_ALBUM,
    }
}

export const dontShowAlbum = () => {
    return {
        type: DONT_SHOW_ALBUM,
    }
}

export const dismount = () => {
    return {
        type: DISMOUNT,
    }
}
