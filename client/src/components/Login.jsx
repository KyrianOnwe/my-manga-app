import React, {useState} from 'react'

function Login({setu, usErr}) {
    const [formData, setFormData] = useState({
        user_name:'',
        password:''
    })

    const {user_name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name,
            password
        }        
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json().then(setu)
          } else {
            res.json().then(usErr)
          }
        })      
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

      }

        return (
        <> 
        <form onSubmit={onSubmit} className='form2'>
        <label>
          Username
          </label>
        <input type='text' name='user_name' value={user_name} onChange={handleChange} />
    
        <label>
          Password
          </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
        <input type='submit' value='Log in!' />
      </form>
        </>
    )
}

export default Login