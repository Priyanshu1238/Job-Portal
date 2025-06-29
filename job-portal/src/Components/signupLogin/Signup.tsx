// import React from 'react'

import { faAt, faCheck, faLock, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, TextInput } from "@mantine/core"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../Services/UserService"
import { signupValidation } from "../../Services/FormValidation"
import { notifications } from "@mantine/notifications"



const Signup = () => {
    const form = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT"
    }

    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false);
    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name;
        let value = event.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signupValidation(name, value) })
        if (name === "password" && data.confirmPassword !== "") {
            let err = ""
            if (data.confirmPassword !== value) err = "Password do not match.";

            setFormError({ ...formError, [name]: signupValidation(name, value), confirmPassword: err });

        }
        if (name === "confirmPassword") {
            if (data.password !== value) setFormError({ ...formError, [name]: "Password do not match." })
            else setFormError({ ...formError, confirmPassword: "" })
        }
    }
    const handleSubmit = () => {
       
        let valid = true; let newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signupValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Password do not match."
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);


        if (valid === true) {
            setLoading(true);
            registerUser(data).then((res) => {
                console.log(res);
                setData(form);
                notifications.show({
                    title: 'Registered Successfully',
                    message: 'Redirecting to login page...',
                    withCloseButton: true,
                    icon: <FontAwesomeIcon icon={faCheck} />,
                    color: "teal",
                    withBorder: true,
                    className: "!border-green-500"
                })
                setTimeout(() => {
                    setLoading(false)
                    navigate("/login")
                }, 4000)


            }).catch((err) => {
                setLoading(false)
                notifications.show({
                    title: 'Registration failed',
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
                //   className="translate-x-1/2"
                  overlayProps={{ radius: 'sm', blur: 2 }}
                  loaderProps={{ color: 'brightSun.4', type: 'bars' }}
                />
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>

            <TextInput withAsterisk
                value={data.name}
                name="name"
                error={formError.name}
                onChange={handleChange}
                label="Full Name"
                placeholder="Your Name"
            />
            <TextInput withAsterisk
                // leftSectionPointerEvents="none"
                onChange={handleChange}
                value={data.email}
                name="email"
                error={formError.email}
                leftSection={<FontAwesomeIcon icon={faAt} />}
                label="Email"
                placeholder="Your email"
            />
            <PasswordInput withAsterisk value={data.password} error={formError.password} onChange={handleChange} name="password" leftSection={<FontAwesomeIcon icon={faLock} />} label="Password" placeholder="Password" />
            <PasswordInput withAsterisk value={data.confirmPassword} error={formError.confirmPassword} onChange={handleChange} name="confirmPassword" leftSection={<FontAwesomeIcon icon={faLock} />} label="Confirm Password" placeholder="Confirm Password" />

            <Radio.Group
                value={data.accountType}
                onChange={handleChange}

                label="You are"
                withAsterisk
            >
                <Group mt="xs">
                    <Radio autoContrast value="APPLICANT" label="Applicant" />
                    <Radio autoContrast value="EMPLOYER" label="Employer" />

                </Group>
            </Radio.Group>

            {/* <Checkbox autoContrast label={<>I accept {' '}<Anchor>Terms and conditions</Anchor></>} /> */}
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Signup</Button>
            <div className="mx-auto">Already have an account?<span onClick={() => { navigate("/login"); setFormError(form); setData(form) }} className="text-bright-sun-400 hover:underline cursor-pointer"> Login</span></div>
        </div></>
    )
}

export default Signup