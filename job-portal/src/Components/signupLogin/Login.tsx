// import React from 'react'

import { faAt, faCheck, faLock, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, PasswordInput, TextInput } from "@mantine/core"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../Services/UserService"
import { loginValidation } from "../../Services/FormValidation"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"
import ResetPassword from "./ResetPassword"

const form = {
    email: "",
    password: "",
}
const Login = () => {
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const handleChange = (event: any) => {
setFormError({...formError,[event.target.name]:""});
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = () => {
        let valid = true; let newFormError: { [key: string]: string } = {};
        for (let key in data) {
             newFormError[key] = loginValidation(key, data[key]);
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if(valid){
            loginUser(data).then((res) => {
                console.log(res);
                 notifications.show({
                                    title: 'Great! Your are getting in',
                                    message: 'Redirecting to home page...',
                                    withCloseButton: true,
                                    icon: <FontAwesomeIcon icon={faCheck} />,
                                    color: "teal",
                                    withBorder: true,
                                    className: "!border-green-500"
                                })
                                setTimeout(() => {
                                    navigate("/")
                                }, 4000)
            }).catch((err) => {
                            notifications.show({
                                title: 'Something Wrong Please try again',
                                message: err.response.data.errorMessage,
                                withCloseButton: true,
                                icon: <FontAwesomeIcon icon={faX} />,
                                color: "red",
                                withBorder: true,
                                className: "!border-red-500"
                            })
                            console.log(err.response.data)
                        })
        }
        
    }
    return (
        <>
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
                error={formError.email}
            />
            <PasswordInput withAsterisk error={formError.password} value={data.password} onChange={handleChange} name="password" leftSection={<FontAwesomeIcon icon={faLock} />} label="Password" placeholder="Password" />

            <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">New to Job~Matcher?<span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className="text-bright-sun-400 hover:underline cursor-pointer"> SignUp</span></div>
            <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>
        </div>
        <ResetPassword opened={opened} close={close}/>
        </>
    )
}

export default Login