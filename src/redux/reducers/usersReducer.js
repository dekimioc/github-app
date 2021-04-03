import {GET_USERS, USERS_ERROR, LOADING_USERS, CLEAN_ERRORS} from '../types'

const initialState = {
    users:[],
    loading: false,
    usersError: '',
    usersDetailsError: ''
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading: false
        }
        case LOADING_USERS:
        return {
            ...state,
            loading:true
        }
        case USERS_ERROR:
            return{
                ...state,
                loading: false, 
                usersError: action.payload.message,
                usersDetailsError: action.payload.stack
            }
        case CLEAN_ERRORS:
            return {
                ...state,
                usersError: '',
                usersDetailsError: ''
            }
        default: return state
    }

}