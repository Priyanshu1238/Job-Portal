// import React from 'react'

import { faAt, faCheck, faLock, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginValidation } from "../../Services/FormValidation"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"
import ResetPassword from "./ResetPassword"
import { useDispatch } from "react-redux"
import { setUser } from "../../Slices/UserSlice"

import { setJwt } from "../../Slices/JwtSlice"
import { loginUser } from "../../Services/AuthServices"
import { jwtDecode } from 'jwt-decode';



const Login = () => {
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const form = {
   
        email: "",
        password: "",
    }
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
            setLoading(true);
            loginUser(data).then((res) => {
                // console.log(res);
                 notifications.show({
                                    title: 'Great! Your are getting in',
                                    message: 'Redirecting to home page...',
                                    withCloseButton: true,
                                    icon: <FontAwesomeIcon icon={faCheck} />,
                                    color: "teal",
                                    withBorder: true,
                                    className: "!border-green-500"
                                })
                                 dispatch(setJwt(res.jwt))
                                    const decoded=jwtDecode(res.jwt);
                                    console.log(decoded);
                                    dispatch(setUser({...decoded,email:decoded.sub}));
                                setTimeout(() => {
                                    // setLoading(false);
                                    // 
                                   
                                    navigate("/")
                                }, 4000)
            }).catch((err) => {
                            setLoading(false);
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
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
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

            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Login</Button>
            <div className="mx-auto">New to Job~Matcher?<span onClick={() => { navigate("/signup"); setFormError(form); setData(form) }} className="text-bright-sun-400 hover:underline cursor-pointer"> SignUp</span></div>
            <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forget Password?</div>
        </div>
        <ResetPassword opened={opened} close={close}/>
        </>
    )
}

export default Login