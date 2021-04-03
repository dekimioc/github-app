import React from 'react'
import './Layout.scss'
import PropTypes from 'prop-types'

const Layout = (props) => {
    return(
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

Layout.propTypes = {
    props: PropTypes.object
}

export default Layout;