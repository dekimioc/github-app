import React from 'react'
import './RepoCard.scss'
import PropTypes from 'prop-types'

const RepoCard = ({name, desc, created, star, forks, licence, link, watchers}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="col-md-6 text-center repo-card">
            <div className="repo-card-inner-container">
                <p>Name: {name}</p>
                <p>Desc: {desc ? desc : "/"}</p>
                <p>Created: {created}</p>
                <p>Stargazers: {star}</p>
                <p>Forks: {forks}</p>
                <p>Watchers: {watchers}</p>
                <p>License: {licence}</p>
                <p className="overlay">Click to see repo</p>
            </div>     
        </a>
    )
}

RepoCard.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    created: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    licence: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    watchers: PropTypes.number.isRequired,
}

export default RepoCard