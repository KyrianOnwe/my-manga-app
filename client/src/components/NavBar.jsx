import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function NavBar({ deleteUser, currUser }) {
  return (
    <>
    <div id='navbar'>
    <ul>
        <li><Link to="/">Home</Link></li>          
        {/* <li><Link to="/reviews">Reviews</Link></li> */}
        <li><Link to="/mangas">Mangas</Link></li>
        {currUser.id ? <Logout deleteUser={deleteUser} /> : null}
        <li><Link to="/mangas/new">Add a Fresh Mangas</Link></li>

    </ul>    
</div>
</>
  )
}

export default NavBar