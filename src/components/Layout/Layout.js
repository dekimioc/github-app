import React from 'react'
import './Layout.scss'

const Layout = (props) => {
    return(
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
};

export default Layout;