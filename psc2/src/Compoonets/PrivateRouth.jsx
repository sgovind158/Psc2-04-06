import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const PrivateRouth = ({children}) => {
    const [state] = useContext(AppContext)

    if(!state.isAuth){
        return <Navigate to = "/login"/>
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRouth
