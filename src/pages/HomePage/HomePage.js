import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loaderHandler, cleanErrors} from '../../redux/actions/repository-actions'
import Layout from '../../components/Layout/Layout'
import SearchForm from '../../components/SearchForm/SearchForm'
import UserCard from '../../components/UserCard/UserCard'
import Loader from '../../components/Loader/Loader'
import ErrorModal from '../../components/ErrorModal/ErrorModal'

const HomePage = () => {
    const usersData = useSelector(state => state.usersList.users)
    const loadingUsersState = useSelector(state => state.usersList.loading)
    const errorMessage = useSelector(state => state.usersList.usersError)
    const errorDetailsMessage = useSelector(state => state.usersList.usersDetailsError)
    const usersSearchHandler = useSelector(state => state.usersList.searchedUsers)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loaderHandler())
        dispatch(cleanErrors())
    }, [dispatch])

    const usersSearched = usersSearchHandler ? <p className="text-center">There is no users with that user name! Try with some other name!</p> : <p className="text-center">Users will be listed here! </p>;
    return(
        <div>
            <Layout>
        {!errorMessage && errorMessage.length === 0 ? <>
            <SearchForm />
            {!loadingUsersState ? <div className="row">
                    {usersData && usersData.length !== 0 ? usersData.map(e => <UserCard key={e.id} avatar={e.avatar_url} loginName={e.login}/>) : usersSearched}
                </div> : <Loader />}
        </> : <ErrorModal showCloseButton={true} errorText={errorMessage} errorDetails={errorDetailsMessage}/>}
            </Layout>
        </div>
    )
};

export default HomePage;