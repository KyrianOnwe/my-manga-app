import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ deleteUser }) {
  const hist = useNavigate()
    function logout(){
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => both())                
    }

    function both(){
      logout()
      hist('/')
      deleteUser()
      // sstart(false)
      
      
    }
  return (
    <div>
        <button onClick={both}>Logout</button>
    </div>
  )
}

export default Logout