import React from 'react'
import './ButtonElement.scss'
import back from '../../assets/imgs/back.png'
import PropTypes from 'prop-types'

const ButtonElement = ({action, text}) => {
    return (
        <div className="button-custom">
            <button onClick={action}><img className="back-image mr-2" src={back} alt="back"/>{text}</button>
        </div>
    )
}

ButtonElement.propTypes = {
    action: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default ButtonElement