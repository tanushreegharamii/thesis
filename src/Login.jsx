import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login (){
    const [email, setEmail] = useState()
    const[password, setPassword] = useState()
    const Navigate= useNavigate()

    const handleChange=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result=>{
            console.log(result)
            if(result.data === "Success"){
                Navigate('/home')
            }
        })
    }

    return(
    <>
    <h4>Login</h4>
    <form action='post' onSubmit={handleChange} >
        <input type='email' placeHolder='Enter valid email' name='email'  onChange={(e)=>setEmail(e.target.value)} ></input>
        <input type='password' placeHolder='Enter password' name='password'  onChange={(e)=>setPassword(e.target.value)} ></input>
        <button type='submit' >Login</button>
    </form>
    </>
    )
}
export default Login