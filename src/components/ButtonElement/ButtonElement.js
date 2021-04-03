import React from 'react'
import './ButtonElement.scss'
import back from '../../assets/imgs/back.png'

const ButtonElement = ({action, text}) => {
    return (
        <div className="button-custom">
            <button onClick={action}><img className="back-image mr-2" src={back} />{text}</button>
        </div>
    )
}

export default ButtonElement