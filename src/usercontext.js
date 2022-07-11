
import { useState } from "react";
import { createContext } from "react";
import { Provider } from "react";

let userContext = createContext();

export const UserProvider = ({children})=>{
    const[username,setusername]=useState({})
    const [password,setpassword]=useState({})
    const [teachers,setteachers]=useState({})
return (
    <userContext.Provider value={{username,setusername,password,setpassword,teachers,setteachers}}>
        {children}
    </userContext.Provider>
);

};

export default userContext