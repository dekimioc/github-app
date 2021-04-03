
import {GET_USERS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = () => async (dispatch, getState) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_GIT_HUB_API}${getState().search.searchValue}`)
        console.log(res.data.items)
        dispatch( {
            type: GET_USERS,
            payload: res.data.items
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }
}