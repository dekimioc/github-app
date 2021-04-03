
import {USERS_REPOS, CURRENT_USER, IS_LOADED} from '../types'
import axios from 'axios'

export const getCurrentUser = name => {
     return {
        type: CURRENT_USER,
        name: name
  };
}

export const loaderHandler = action => {
     return {
        type: IS_LOADED,
        action: action
  };
}

export const getUsersRepos = () => async (dispatch, getState) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_REPOS}/${getState().repos.currentUser}/repos`)
        console.log(res.data)
        dispatch( {
            type: USERS_REPOS,
            payload: res.data
        })
    }
    catch(error){
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: error,
        // })
    }
}