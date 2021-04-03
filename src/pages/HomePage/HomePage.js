import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useSelector} from 'react-redux'
import UserCard from '../../components/UserCard/UserCard';

const HomePage = () => {
    const usersData = useSelector(state => state.usersList.users)
    return(
        <div>
            <Layout>
            <SearchForm />
            <h2>Results for: </h2>
                <div className="row">
                    {usersData.length > 0 ? usersData.map(e => <UserCard key={e.id} avatar={e.avatar_url} loginName={e.login}/>) : null}
                </div>
            </Layout>
        </div>
    )
};

export default HomePage;