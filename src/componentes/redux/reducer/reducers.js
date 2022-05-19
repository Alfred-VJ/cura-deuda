import {
    GET_ARTISTS,
    ACTIVAR_MENU
} from '../actions/typeActions.js'




const initialState = {
    artists: [],
    enter: false
}

export const rootReducer = (state = initialState, {type, payload}) => {
        switch(type){
            case GET_ARTISTS:
                return{
                    ...state,
                    artists: payload
                }

            case ACTIVAR_MENU:
                return {
                    ...state,
                    enter: true,
                }
            default: return state
        }
}