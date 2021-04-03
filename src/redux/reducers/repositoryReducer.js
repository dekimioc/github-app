import {USERS_REPOS, CURRENT_USER, IS_LOADED} from '../types'

const initialState = {
    repos: [],
    currentUser: '',
    loaded: false
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
        default: return state
    }
}