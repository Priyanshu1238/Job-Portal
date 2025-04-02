// import React from 'react'

import {  faCheck, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ApplyJobForm = () => {
    const[Preview,setPreview]=useState(false); 
    const [Submit,SetSubmit]=useState(false);
    const[Sec,SetSec] = useState(5);
    const navigate=useNavigate();
    const handlePreview=()=>{
        setPreview(!Preview);
        window.scrollTo({top:300,behavior:'smooth'})
    }
    const handleSubmit =()=>{
        SetSubmit(true);
        let x =5;
        setInterval(()=>{
                x--;
                SetSec(x);
                if(x==0) navigate('/find-jobs');
        },1000)

    }
  return (
    <> 
    <div className="w-2/3 mx-auto">

    <LoadingOverlay className=""
          visible={Submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />


        <div className="flex justify-between mb-2" >
                    <div className="flex gap-2 items-center">
                        <div className="p-2 bg-mine-shaft-800 rounded-lg">
                            <img  className="h-12" src={`./Icons/Google.png`}/>
                            </div>
                        <div>
                            <div className="font-semibold text-2xl">SE</div>
                            <div className="text-lg text-mine-shaft-300">Google &bull; 3 days ago &#x2022; 48 Applicants</div>
                        </div>
        
                        
        
                    </div>
                    
        
                    
        </div>
        <Divider my="xl"/>
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <div className="flex flex-col gap-5 ">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput label="Full Name" readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter name" withAsterisk/>
                <TextInput label="Email"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter email" withAsterisk/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput label="Phone Number"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter mobile number"  hideControls min={0} max={9999999999} clampBehavior="strict" withAsterisk/>
                <TextInput label="Personal Website"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter url" withAsterisk/>
            </div>
            <FileInput
                 leftSection={<FontAwesomeIcon icon={faPaperclip}/>}
                 label="Attach your CV"
                 placeholder="Your CV"
                 leftSectionPointerEvents="none"
                 withAsterisk
                 readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`}
             />
             <div className="flex gap-10 [&>*]:w-1/2">
             <TextInput label="Github"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="github.com/abc" withAsterisk/>
             <TextInput label="linkedIn url"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="linkedIn url" withAsterisk/>
             </div>
             <Textarea
             placeholder="Type Something about yourself..."
             label="Cover Letter"
             autosize
             minRows={4}
             withAsterisk
             readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`}
             />
            {
                !Preview&&<Button onClick={handlePreview}  variant="light" color="brightSun.4">Preview</Button>
            }
            {
                Preview && <div className="flex gap-10 [&>*]:w-1/2">
                    <Button fullWidth onClick={handlePreview}  variant="outline" color="brightSun.4">Edit</Button>
                    <Button fullWidth onClick={handleSubmit}  variant="light" color="brightSun.4">Submit</Button>
                </div>
            }

        </div>
    </div>
    <Notification className={`!border-bright-sun-400 z-[1001] !fixed top-0 left-[35%] transition duration-300 ease-in-out ${Submit?"opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-20"}`}  icon={<FontAwesomeIcon icon={faCheck}/>} withBorder color="teal" title="Application Submitted" mt="md" withCloseButton={false}>
            Redirecting to Find Jobs in {Sec} seconds ...
  </Notification>
  </>
  )
}

export default ApplyJobForm