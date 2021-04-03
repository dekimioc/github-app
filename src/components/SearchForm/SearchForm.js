import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../redux/actions/users-actions'
import {searchHandler} from '../../redux/actions/search-actions'
import './SearchForm.scss'


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
        <form className="col-12 mb-5 pt-5 mt-5 text-center" onSubmit={handleSubmit}>
            <input type="text" className="search-input" placeholder="Search Users" value={searchValue} onChange={e => handleChange(e)} />
            <input type="submit" disabled={searchValue.length === 0} className="submit-button" />
        </form>
    )
};

export default SearchForm;