
import {GET_USERS, USERS_ERROR, LOADING_USERS ,CLEAN_ERRORS, SEARCHED_USERS} from '../types'
import axios from 'axios'

export const loadingUsers = action => {
     return {
        type: LOADING_USERS,
        action: action
  };
}

export const cleadErrors = action => {
     return {
        type: CLEAN_ERRORS,
        action: action
  };
}

export const searchedUsers = action => {
     return {
        type: SEARCHED_USERS,
        action: action
  };
}

export const getUsers = () => async (dispatch, getState) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_GIT_HUB_API}${getState().search.searchValue}`)
        dispatch(loadingUsers())
        if(res.status === 200) {
            dispatch(searchedUsers())
            dispatch( {
            type: GET_USERS,
            payload: res.data.items
        })
        }
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }
}