import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function NavBar({ deleteUser, logged }) {
  


  
  return (
    <>
    <div id='navbar'>
    <ul>
        <li><Link to="/">Home</Link></li>          
        <li><Link to="/mangas">Mangas</Link></li>
        <li><Link to="/mangas/new">Add a Fresh Mangas</Link></li>
       {logged ? <Logout deleteUser={deleteUser} /> : null }


    </ul>    
</div>
</>
  )
}

export default NavBar