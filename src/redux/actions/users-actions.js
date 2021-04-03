
import {GET_USERS, USERS_ERROR, LOADING_USERS ,CLEAN_ERRORS} from '../types'
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

export const getUsers = () => async (dispatch, getState) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_GIT_HUB_API}${getState().search.searchValue}`)
        dispatch(loadingUsers())
        if(res.status === 200) {
            dispatch( {
            type: GET_USERS,
            payload: res.data.items
        })
        }
    }
    catch(error){
        console.log(error.message)
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }
}