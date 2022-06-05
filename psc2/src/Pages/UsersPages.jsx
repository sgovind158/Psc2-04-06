import React, { useContext, useEffect, useState } from 'react'
import  axios from "axios"
import { Link, useParams,Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const UsersPages = () => {
    const [data,setData] = useState([])
    const [state,dispatch] = useContext(AppContext)
    const params = useParams();
    // console.log(params)
    useEffect(()=>{
        axios({
            url:`https://reqres.in/api/users/${params.id}`,
            method:"GET"
        })
        .then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        }).catch((err)=>{
            console.log("err")
        })

    },[params.id])
    console.log(data,"my data")
  return (
    <div>
        {/* {data.map((item ,i)=>( */}
            <div key={data.id}>
                <img src={data.avatar} alt="" />
           
            <div>  ID :{data.id}</div>
            <div>  Name :{data.first_name}</div>
            <div>  surname :{data.last_name}</div>
            <div>  Email :{data.email}</div>
          
               <Link to={`/users/${data.id}`}>See More</Link>
            </div>
        {/* ))} */}
    
    </div>
  )
}

export default UsersPages
