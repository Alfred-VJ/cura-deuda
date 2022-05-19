import axios from 'axios';
import {
    GET_ARTISTS,
    ACTIVAR_MENU
} from '../actions/typeActions.js';





export const getArtists = (name) => {
    return async (dispatch) => {
        try{
           const civil = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`);
           
           return dispatch({
               type: GET_ARTISTS,
               payload: civil.data
           })
        }catch(error) {return 'Error al desplegar las civilizaciones'}
    }
}





export const activarMenu = () => {
    return {
        type: ACTIVAR_MENU,
    }
}