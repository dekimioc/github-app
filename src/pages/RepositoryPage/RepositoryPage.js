import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import RepoCard from '../../components/RepoCard/RepoCard';
import {getCurrentUser, getUsersRepos} from '../../redux/actions/repository-actions'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader';
import  ButtonElement from '../../components/ButtonElement/ButtonElement';
import ErrorModal from '../../components/ErrorModal/ErrorModal'
import PropTypes from 'prop-types'

const RepositoryPage = ({match}) => {
    const dispatch = useDispatch()
    const usersRepos = useSelector(state => state.repos.repos)
    const isLoaded = useSelector(state => state.repos.loaded)
    const errorMessage = useSelector(state => state.usersList.usersError)
    const errorDetailsMessage = useSelector(state => state.usersList.usersDetailsError)
    let history = useHistory();

    useEffect(() => {
        dispatch(getCurrentUser(match.params.name)) 
        dispatch(getUsersRepos())   
      },[match.params.name, dispatch])

    return(
            <Layout>
                {!errorMessage && errorMessage.length === 0 ? <>
                    {isLoaded ? <>
                            <h1 className="col-12 mb-5 text-center mt-5 pt-5">Repositroy Page for user: {match.params.name}</h1>
                        {usersRepos.length !== 0 ? usersRepos.map(e => <RepoCard key={e.id} name={e.full_name} desc={e.description} created={e.created_at} star={e.stargazers_count} forks={e.forks_count} licence={e.license ? e.license.name : "/"} link={e.html_url} watchers={e.watchers}/>) : <h1 className="text-center mb-5 mt-5 ">This User Has No Repos!</h1>}
                        <ButtonElement text="Back To Search Page" action={history.goBack}/>
                        </> : <Loader />}
                </> : <><ErrorModal showCloseButton={false} errorText={errorMessage} errorDetails={errorDetailsMessage}/><ButtonElement text="Back To Search Page" action={history.goBack}/></>}
            </Layout>
        
    )
};

RepositoryPage.propTypes = {
    match: PropTypes.object.isRequired
}

export default RepositoryPage