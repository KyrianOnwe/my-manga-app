import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth({ setu, useSE, newUsr, useSnu }) {
  return (
    <div className='authContainer'>
        {!newUsr ? <Login setu={setu} usErr={useSE} /> : <SignUp useSetUser={setu} usErr={useSE} />}

        <button onClick={useSnu}>{!newUsr ? `Sign up!` : `Log in`}</button>
    </div>
  )
}

export default Auth