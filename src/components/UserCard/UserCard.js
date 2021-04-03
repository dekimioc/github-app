import React from 'react';

const UserCard = ({avatar, loginName}) => {
    return(
            <div className="col-md-4">
                <div>
                    <img src={avatar}/>
                    <p>{loginName}</p>
                </div>
            </div>
    )
}

export default UserCard