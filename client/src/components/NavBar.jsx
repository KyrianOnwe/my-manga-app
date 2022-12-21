import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function NavBar({ deleteUser }) {
  return (
    <>
    <div id='navbar'>
    <ul>
        <li><Link to="/">Home</Link></li>          
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/mangas">Mangas</Link></li>
        <Logout deleteUser={deleteUser} />

    </ul>    
</div>
</>
  )
}

export default NavBar