import React from 'react'
import './RepoCard.scss'

const RepoCard = ({name, desc, created, star, forks, licence, link, watchers}) => {
    return (
        <a href={link} target="_blank" className="col-md-6 text-center repo-card">
            <div className="repo-card-inner-container">
                <p>Name: {name}</p>
                <p>Desc: {desc}</p>
                <p>Created: {created}</p>
                <p>Stargazers: {star}</p>
                <p>Forks: {forks}</p>
                <p>Watchers: {watchers}</p>
                <p>License: {licence}</p>
                <p class="overlay">Click to see repo</p>
            </div>     
        </a>
    )
}

export default RepoCard