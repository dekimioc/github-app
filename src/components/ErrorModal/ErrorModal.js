import React from 'react'
import './ErrorModal.scss'
import {useDispatch} from 'react-redux'
import {cleadErrors} from '../../redux/actions/users-actions'
import close from '../../assets/imgs/close.png'
import PropTypes from 'prop-types'

const ErrorModal = ({ errorText, errorDetails, showCloseButton }) => {

    const dispatch = useDispatch();

    const cleanErrorsHandler = () => {
        dispatch(cleadErrors())    
    }
  return (
    <div className="error-message-container">
        {showCloseButton ? <span className="close-modal" onClick={cleanErrorsHandler}><img src={close}/></span> : null}
        <h1 className="color-error">{errorText}</h1>
        <p className="color-error">{errorDetails}</p>
    </div>
  )
}

ErrorModal.propTypes = {
  errorText: PropTypes.string.isRequired
}

export default ErrorModal