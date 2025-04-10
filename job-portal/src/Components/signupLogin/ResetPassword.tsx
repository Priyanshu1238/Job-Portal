// import React from 'react'

import { faAt, faL, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Modal, PasswordInput, PinInput, TextInput } from "@mantine/core"
import { useState } from "react"
import { changePassword, sendOTP, verifyOtp } from "../../Services/UserService"
import { signupValidation } from "../../Services/FormValidation"
import { errorNotification, successNotification } from "../../Services/NotificationSErvice"
import { useInterval } from "@mantine/hooks"

const ResetPassword = (props: any) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);
    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState("");
    const [resendLoader, setResendLoader] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const interval = useInterval(() => {

        if (seconds === 0) {
            setResendLoader(false);
            setSeconds(60);
            interval.stop();

        } else setSeconds((s) => s - 1)
    }, 1000);


    const handleSendOtp = () => {
        setOtpSending(true)
        sendOTP(email).then((res) => {

            console.log(res);
            successNotification("OTP Sent Successfully", "Enter OTP to Reset")
            setOtpSent(true);
            setOtpSending(false);
            setResendLoader(true);
            interval.start();

        }).catch((err) => {
            console.log(err);
            errorNotification("Failed to Generate OTP", err.response.data.errorMessage)

            setOtpSending(false);
        })

    }
    const handleVerifyOtp = (otp: string) => {

        verifyOtp(email, otp).then((res) => {
            console.log(res);
            successNotification("OTP Verified Successfully", "Enter New Password")

            setVerified(true);
        }).catch((err) => {
            errorNotification("Verification Failed", err.response.data.errorMessage)

            console.log(err)
        })
    }
    const resendOtp = () => {


        if(resendLoader) return;
        handleSendOtp();
    }
    const changeEmail = () => {

        setOtpSent(false)
        setResendLoader(false);
        setSeconds(60);
        setVerified(false);
        interval.stop();
    }
    const handleResetPassword = () => {

        changePassword(email, password).then((res) => {
            console.log(res);
            successNotification("Password Changes", "Login with new Password");
            props.close();
        }).catch((err) => {
            errorNotification("Failed to Reset Password", err.response.data.errorMessage)

            console.log(err)
        })

    }
    return (

        <Modal opened={props.opened} onClose={props.close} title="Reset Password">
            {/* Modal content */}
            <div className="flex flex-col gap-6">
                <TextInput withAsterisk
                    // leftSectionPointerEvents="none"
                    leftSection={<FontAwesomeIcon icon={faAt} />}
                    size="md"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    label="Email"
                    placeholder="Your email"
                    rightSection={<Button loading={otpSending && !otpSent} disabled={email === "" || otpSent} size="xs" className="mr-1" onClick={handleSendOtp} autoContrast variant="filled">Send OTP</Button>}
                    rightSectionWidth="xl"
                />

                {
                    otpSent &&
                    <PinInput length={6} className="mx-auto" size="md" onComplete={handleVerifyOtp} gap="lg" type="number" />
                }
                {
                    otpSent && !verified &&
                    <div className="flex gap-2" >
                        <Button fullWidth loading={otpSending} onClick={resendOtp} color="brightSun.4" autoContrast variant="light">{resendLoader?seconds:"Resend OTP"}</Button>
                        <Button fullWidth onClick={changeEmail} autoContrast variant="filled">Change Email</Button>
                    </div>
                }

                {
                    verified &&
                    <PasswordInput withAsterisk error={passErr} value={password} onChange={(e) => { setPassword(e.target.value); setPassErr(signupValidation("password", e.target.value)) }} name="password" leftSection={<FontAwesomeIcon icon={faLock} />} label="Password" placeholder="Password" />

                }
                {
                    verified &&
                    <Button fullWidth onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
                }
            </div>

        </Modal>
    )
}

export default ResetPassword