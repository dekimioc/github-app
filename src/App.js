import React from 'react'
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RepositoryPage from './pages/RepositoryPage/RepositoryPage'


function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/:name/" exact component={RepositoryPage} />
    </BrowserRouter>
  )
}

export default App;
