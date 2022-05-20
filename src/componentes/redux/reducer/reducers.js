import { dismount } from '../actions/actions.js'
import {
    GET_ARTISTS,
    ACTIVAR_MENU,
    GET_DISCOGRAPHY,
    SHOW_ALBUM,
    DONT_SHOW_ALBUM,
    DISMOUNT
} from '../actions/typeActions.js'




const initialState = {
    artists: [],
    discography: [],
    enter: false,
    show: false,
   
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ARTISTS:
            return {
                ...state,
                artists: payload
            }

        case ACTIVAR_MENU:
            return {
                ...state,
                enter: true,
            }
        case GET_DISCOGRAPHY:
            return {
                ...state,
                discography: payload
            }
        case SHOW_ALBUM:
            return {
                ...state,
                show: true,
            }
        case DONT_SHOW_ALBUM:
            return {
                ...state,
                show: false,
            }
        case DISMOUNT:
            return {
                ...state,
                artists: [],
            }

        default: return state
    }
}