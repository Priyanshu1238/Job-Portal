// import React from 'react'

import { faAt, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  Button,  PasswordInput, TextInput } from "@mantine/core"
import { useState } from "react"
import { Link } from "react-router-dom"
import { loginUser } from "../../Services/UserService"

const form={
    email:"",
    password:"",
}
const Login = () => {
    const[data,setData]=useState(form);
        const handleChange=(event:any)=>
        {
            
                setData({...data,[event.target.name]:event.target.value})
        }
        const handleSubmit=()=>{
           loginUser(data).then((res)=>{
                console.log(res);
            }).catch((err)=>console.log(err.response.data))
        }
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login to your Account</div>

            
            <TextInput withAsterisk
                // leftSectionPointerEvents="none"
                leftSection={<FontAwesomeIcon icon={faAt} />}
                onChange={handleChange}
                value={data.email}
                name="email"
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput withAsterisk value={data.password} onChange={handleChange} name="password"  leftSection={<FontAwesomeIcon icon={faLock} />} label="Password" placeholder="Password" />
           
            <Button  onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">New to Job~Matcher?<Link to="/signup" className="text-bright-sun-400 hover:underline"> Signup</Link></div>
        </div>
    )
}

export default Login