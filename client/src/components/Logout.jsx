import React from 'react'

function Logout({ deleteUser }) {
    function logout(){
        fetch('/logout', {
            method: 'DELETE'
        })
    }

    function both(){
      logout()
      deleteUser()
      
      
    }
  return (
    <div>
        <button onClick={both}>Logout</button>
    </div>
  )
}

export default Logout