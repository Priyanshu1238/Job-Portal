// import React from 'react'

import { faAt, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core"
import { Link } from "react-router-dom"

const Signup = () => {

    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>

            <TextInput withAsterisk
                label="Full Name"
                placeholder="Your Name"
            />
            <TextInput withAsterisk
                // leftSectionPointerEvents="none"
                leftSection={<FontAwesomeIcon icon={faAt} />}
                label="Email"
                placeholder="Your email"
            />
             <PasswordInput withAsterisk leftSection={<FontAwesomeIcon icon={faLock}/>} label="Password" placeholder="Password" />
             <PasswordInput withAsterisk leftSection={<FontAwesomeIcon icon={faLock}/>} label="Confirm Password" placeholder="Confirm Password" />
             <Checkbox  autoContrast label={<>I accept {' '}<Anchor>terms & conditions</Anchor></>}/>
             <Button autoContrast variant="filled">Signup</Button>
             <div className="mx-auto">Already have an account?<Link to="/login" className="text-bright-sun-400 hover:underline"> Login</Link></div>
        </div>
    )
}

export default Signup