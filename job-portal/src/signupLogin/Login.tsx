// import React from 'react'

import { faAt, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  Button,  PasswordInput, TextInput } from "@mantine/core"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login to your Account</div>

            
            <TextInput withAsterisk
                // leftSectionPointerEvents="none"
                leftSection={<FontAwesomeIcon icon={faAt} />}
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput withAsterisk leftSection={<FontAwesomeIcon icon={faLock} />} label="Password" placeholder="Password" />
           
            <Button autoContrast variant="filled">Login</Button>
            <div className="mx-auto">New to Job~Matcher?<Link to="/signup" className="text-bright-sun-400 hover:underline"> Signup</Link></div>
        </div>
    )
}

export default Login