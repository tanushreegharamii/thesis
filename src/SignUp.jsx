import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function SignUp() {

const [name, setName] = useState();
const [email, setEmail]=useState();
const [password, setPassword] = useState();
const Navigate = useNavigate()

const handleSubmit=(e) =>{
  e.preventDefault()
  axios.post('http://localhost:3001/signup', {name, email, password})
  .then(result => {console.log(result)
    console.log("It is",name)
    localStorage.setItem('userName',name)

    Navigate('/Login')

  })
  .catch(err=> console.log(err))

}
  return (
    <>
    <form action ="post" onSubmit={handleSubmit}>
      <input type="text" name="name" placeHolder="Enter full name"  onChange={(e)=> setName(e.target.value)} ></input>
      <input type="email" name="email" placeHolder="Enter email"  onChange={(e)=> setEmail(e.target.value)} ></input>
      <input type="password" name="password" placeHolder="Enter password" onChange={(e)=> setPassword(e.target.value)}  ></input>
      <button type="submit">Submit</button>
    </form>
    <p>All datas are here {name} </p>
    </>
  );
}

export default  SignUp;
