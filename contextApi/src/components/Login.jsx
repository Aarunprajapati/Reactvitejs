import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'
function Login() {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')


    const {setUser} = useContext(UserContext)
    const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2 className='text-3xl'>Login form </h2>
      <input type="text" 
      value={username}
      onChange={(e)=>setUserName(e.target.value)}
      placeholder='username' 
      className=' m-5 p-2 bg-yellow-300 rounded-lg '
      />
      <input type="text" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      placeholder='password' 
      className=' m-5 p-2 bg-yellow-300 rounded-lg'
      />
      <button onClick={handleSubmit} className=' border-2 p-2 bg-red-500 text-white rounded-lg'>Submit</button>
    </div>
  )
}

export default Login
