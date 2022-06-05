import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Login = () => {
    const [state,dispatch] = useContext(AppContext)
    const [email,setEmail] = useState("")
    const [password,setPass] = useState("")

    const handleSubmit = (e)=>{
  e.preventDefault()
  axios({
      url: "https://reqres.in/api/login",
      method : "POST",
      data:{
          email,
          password
      }
  })
  .then((res)=>{
      alert("success")
     dispatch({
         type:"Login_Success",
         token: res.data.token
     })
  })
  .catch((err)=>{
      console.log("err",err)
      alert("error")
  })
    }
 if(state.isAuth){
     return <Navigate to="/users"/>
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div>
              <input placeholder='email' value={email} onChange= {(e)=>setEmail(e.target.value)}/>

          </div>

          <div>
              <input  placeholder='pass' value={password} onChange= {(e)=>setPass(e.target.value)}/>
              
          </div>

          <div>
              <button type='submit'>submit</button>
              
          </div>
      </form>
    </div>
  )
}

export default Login
