import {USERS_REPOS} from '../types'

const initialState = {
    repos: []
}

export const repositoryReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_REPOS:
            return {
                ...state,
                repos: action.e
            }
        default: return state
    }
}