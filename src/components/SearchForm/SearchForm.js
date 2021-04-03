import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../redux/actions/users-actions'
import {searchHandler} from '../../redux/actions/search-actions'


const SearchForm = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.search.searchValue);
    
    const handleChange = e => {
        e.preventDefault();
        dispatch(searchHandler(e.target.value))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getUsers())
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Users" value={searchValue} onChange={e => handleChange(e)} />
            <input type="submit" />
        </form>
    )
};

export default SearchForm;