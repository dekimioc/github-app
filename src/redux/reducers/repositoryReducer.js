import {USERS_REPOS, CURRENT_USER, IS_LOADED, USERS_ERROR, CLEAN_ERRORS} from '../types'

const initialState = {
    repos: [],
    currentUser: '',
    loaded: false,
    usersError: '',
    usersDetailsError: ''
}

export const repositoryReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_REPOS:
            return {
                ...state,
                repos: action.payload,
                loaded: true
            }
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.name
            }
        case IS_LOADED:
            return {
            ...state,
            loaded: false
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