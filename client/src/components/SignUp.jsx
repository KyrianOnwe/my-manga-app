import React, { useState } from 'react'
// import {Form} from '../styled/Form'

function SignUp({ useSetUser, usErr }) {
    const [user_name, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setEmail] = useState('')
    let holder 

    function useWorkGoddamint(data){
        holder = {...data}
        useSetUser(holder)                
        setUsername('')
        setpassword('')
        setEmail('')
        
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name, 
            password,
            email
        }
        fetch('/users', {
            method: "POST", 
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
            .then(res => {
                if(res.ok){
                    res.json().then(useWorkGoddamint)
                }else{
                    res.json().then(usErr)
                }
            })

    }
  return (
    <>
    <form onSubmit={onSubmit} className='form' >
        <label>
            Username 
            <br />
            <input type='text' value={user_name} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
            email?  
            <br />
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            Password  
            <br />
            <input type='password' value={password} onChange={(e) => setpassword(e.target.value)} />
        </label>
        <br />

        <input type='submit' value="Sign up" /> 
    </form>

    </>
  )
}

export default SignUp 