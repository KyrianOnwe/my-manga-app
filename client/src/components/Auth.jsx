import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

function Auth({ setu, useSE, newUsr, useSnu }) {
  return (
    <div>
        <Login setu={setu} usErr={useSE} /> : <SignUp useSetUser={setu} usErr={useSE} />

        <button onClick={useSnu}>{newUsr ? `Log in` : `Sign up!`}</button>
    </div>
  )
}

export default Auth