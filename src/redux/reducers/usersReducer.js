import {GET_USERS, USERS_ERROR, SEARCH_HANDLER} from '../types'

const initialState = {
    users:[],
    loading:true,
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading: false
        }
        case USERS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}