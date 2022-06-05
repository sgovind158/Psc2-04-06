import React, { createContext, useReducer, useState } from 'react'

export  const AppContext = createContext()
const initState = {
    isAuth : false,
    token : null
}

const reducer = (state,action)=>{
    switch(action.type){
        case "Login_Success":{
            return {
                ...state,
                isAuth:true,
                token: action.token
            }
        }

        case "Logout_Success":{
            return {
                ...state,
                isAuth:false,
                token: null
            }
        }

        case "Login_Failure":{
            return {
                ...state,
                isAuth:false,
                token: null
            }
        }


    }

}

export const AppContextProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false)
    const [state,dispatch] = useReducer(reducer,initState)


    const toggleAuth = ()=>{
        setIsAuth(!isAuth)
    }
    return (
        <AppContext.Provider value={[state,dispatch]} >{children}</AppContext.Provider>
    )
}

