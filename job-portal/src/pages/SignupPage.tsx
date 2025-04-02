// import React from 'react'

import { faFileLines } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useLocation } from "react-router-dom"
import Signup from "../Components/signupLogin/Signup";
import Login from "../Components/signupLogin/Login";

const SignupPage = () => {
    const location=useLocation();
    return (
        <div className="min-h-screen h-screen w-screen bg-mine-shaft-950 font-sans  overflow-hidden ">

            <div className="w-[100vw] h-[100vh] flex ">
                
                <div className="w-1/2 h-full bg-mine-shaft-900 rounded-r-[200px] flex items-center gap-5 justify-center flex-col">
                    <div className="text-6xl font-semibold flex gap-2 items-center text-bright-sun-400">

                        <FontAwesomeIcon icon={faFileLines} /> {/* Replacing Tabler Icon */}
                        Job~Matcher
                    </div>
                    <div className="text-2xl text-mine-shaft-200 font-semibold italic ">"Where Ambitions Meet Careers"</div>

                </div>
                {
                    location.pathname!="/login"?<Signup/>:<Login/>
                }
                 
            </div>
            
        </div>
    )
}

export default SignupPage