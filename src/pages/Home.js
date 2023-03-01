import React from 'react'
import { Link } from 'react-router-dom'
import ToolsList from '../components/Toolslist'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main className='home'>
        <div className="home-container">
            <div className="col">
                <h1 className="text-h4 mx-1 my-3"> Toolhub is a community-authored catalog of Wikimedia tools. </h1>
                <p className="section-title"> Discover new tools, promote their use in your wiki community, help improve them by contributing data. </p>
            </div>
        </div>
        <div>
            <ul className='home-links'>
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li className='true'>
                    <Link to='/leaderboard'>Leaderboard</Link>
                </li>
                <li>
                    <Link to='/records'>Records</Link>
                </li>
            </ul>
        </div>      
        <SearchForm />
        <ToolsList />
    </main>
  )
}
