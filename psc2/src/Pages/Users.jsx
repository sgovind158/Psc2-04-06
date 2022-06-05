import React, { useContext, useEffect, useState } from 'react'
import  axios from "axios"
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { useSearchParams } from 'react-router-dom'

const Users = () => {
    const [data,setData] = useState([])
    const [state,dispatch] = useContext(AppContext)
    const [searchParams,setSearchParams] = useSearchParams();
    const [page,setPage] = useState(Number(searchParams.get("page"))||2)

    useEffect(()=>{
        setSearchParams({
            page
        })
        
        axios({
            url:"https://reqres.in/api/users",
            method:"GET",
            params:{
                page
            }
        })
        .then((res)=>{
            setData(res.data.data)
            // console.log(res.data.data)
        }).catch((err)=>{
            console.log("err")
        })

    },[page])
  return (
    <div>
        <div>
            <button disabled= {page===1} onClick={()=>setPage(1)}>1</button>
            <button disabled= {page===2} onClick={()=>setPage(2)}>2</button>
        </div>
        {data.map((item ,i)=>(
            <div key={item.id}>
                <img src={item.avatar} alt="" />
           
            <div>  Name :{item.first_name}</div>
               <Link to={`/users/${item.id}`}>See More</Link>
            </div>
        ))}
    
    </div>
  )
}

export default Users
