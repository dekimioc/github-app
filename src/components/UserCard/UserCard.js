import React from 'react'
import {Link} from 'react-router-dom'
import './UserCard.scss'
import PropTypes from 'prop-types'

const UserCard = ({avatar, loginName}) => {
    return(
            <Link to={loginName} className="link col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="user-card">
                    <img className="text-center" src={avatar} alt="user" />
                    <h4 className="text-center pt-3 pb-3">{loginName}</h4>
                </div>
            </Link>
    )
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    loginName: PropTypes.string.isRequired
}

export default UserCard