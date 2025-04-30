// import React from 'react'

import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core"
import { isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from "../../Services/Utilities";
import { applyJob } from "../../Services/JobServices";
import { errorNotification, successNotification } from "../../Services/NotificationSErvice";
import { useSelector } from "react-redux";

const ApplicationForm = () => {
    const navigate=useNavigate();
    const user=useSelector((state:any)=>state.user);
    const {id}=useParams();
    const[Preview,setPreview]=useState(false); 
        const [Submit,SetSubmit]=useState(false);
        // const[Sec,SetSec] = useState(5);
        // const navigate=useNavigate();
        const handlePreview=()=>{
            // form.validate();
            // window.scrollTo({top:300,behavior:'smooth'})
            // if(!form.isValid()) return;
            setPreview(!Preview);
            // console.log(form.getValues());
        }
        const handleSubmit =async ()=>{
    
            SetSubmit(true);
            let resume:any=await getBase64(form.getValues().resume);
            let applicant={...form.getValues(),applicantId:user.id,resume:resume.split(',')[1]};
            applyJob(id,applicant).then((res)=>{
                SetSubmit(false);
                successNotification("Success","Apply Successfully");
                navigate("/job-history");
            }).catch((err)=>{
                SetSubmit(false);
                errorNotification("Error",err.response.data.errorMessage);
            })
        }
         const form = useForm({
                        mode: 'controlled',
                        validateInputOnChange:true,
                        initialValues: { name: '', email: '' ,phone:'',website:'',resume:null,github:'',linkedIn:'',coverLetter:''},
                        validate:{
                            name:isNotEmpty("name is required"),
                            email:isNotEmpty("email is required"),
                            phone:isNotEmpty("phone is required"),
                            website:isNotEmpty("website is required"),
                            resume:isNotEmpty("resume is required"),
                            github:isNotEmpty("Github is required"),
                            linkedIn:isNotEmpty("linkedIn is required")
                            // coverLetter:isNotEmpty("website is required"),

                            
                        }
                
                    });
  return (
   
    <div>
         <LoadingOverlay className=""
    visible={Submit}
    zIndex={1000}
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'brightSun.4', type: 'bars' }}
  />
        <div className="text-xl font-semibold mb-5">Submit Your Application</div>
        <div className="flex flex-col gap-5 ">
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput {...form.getInputProps("name")} label="Full Name" readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter name" withAsterisk/>
                <TextInput  {...form.getInputProps("email")} label="Email"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter email" withAsterisk/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <NumberInput  {...form.getInputProps("phone")} label="Phone Number"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter mobile number"  hideControls min={0} max={9999999999} clampBehavior="strict" withAsterisk/>
                <TextInput  {...form.getInputProps("website")} label="Personal Website"  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="Enter url" withAsterisk/>
            </div>
            <FileInput
             {...form.getInputProps("resume")}
             accept="application/pdf"
                 leftSection={<FontAwesomeIcon icon={faPaperclip}/>}
                 label="Attach your CV"
                 placeholder="Your CV"
                 leftSectionPointerEvents="none"
                 withAsterisk
                 readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`}
             />
             <div className="flex gap-10 [&>*]:w-1/2">
             <TextInput   label="Github" {...form.getInputProps("github")} readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="github.com/abc" withAsterisk/>
             <TextInput label="linkedIn url" {...form.getInputProps("linkedIn")}  readOnly={Preview} variant={Preview?"unstyled":"default"} className={`${Preview?"text-mine-shaft-300 font-semibold":""}`} placeholder="linkedIn url" withAsterisk/>
             </div>
             <Textarea
                 {...form.getInputProps("coverLetter")}
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
  )
}

export default ApplicationForm