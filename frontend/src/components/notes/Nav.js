import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Note-It</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Note</Link></li>
                <li className='link-logout' onClick={logoutSubmit}><Link to="/">LOGOUT</Link></li>
            </ul>
            
        </header>
    )
}
