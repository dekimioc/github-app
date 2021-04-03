import {SEARCH_HANDLER} from '../types'

const initialState = {
    searchValue: ''
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_HANDLER:
            return {
                ...state,
                searchValue: action.e
            }
        default: return state
    }
}