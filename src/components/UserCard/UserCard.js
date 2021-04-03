import React from 'react'
import {Link} from 'react-router-dom'
import './UserCard.scss'

const UserCard = ({avatar, loginName}) => {
    return(
            <Link to={loginName} className="link col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="user-card">
                    <img className="text-center" src={avatar}/>
                    <h4 className="text-center pt-3 pb-3">{loginName}</h4>
                </div>
            </Link>
    )
}

export default UserCard