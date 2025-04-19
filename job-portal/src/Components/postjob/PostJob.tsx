// import React from 'react'

import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { content, fields } from "../../Data/PostJobData"
import { SelectInput } from "./SelectInput"
import { TextEditor } from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../Services/JobServices";
import { errorNotification, successNotification } from "../../Services/NotificationSErvice";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PostJob = () => {
    const navigate=useNavigate();
    const select=fields;
    const form=useForm({
        mode:'controlled',
        validateInputOnChange:true,
        initialValues:{
            jobTitle:'',
            company:'',
            experience:'',
            jobType:'',
            location:'',
            packageOffered:'',
            skillsRequired:[],
            about:'',
            description:content

        },
        validate:{
            jobTitle:isNotEmpty("Title cannot be empty"),
            company:isNotEmpty("company cannot be empty"),
            experience:isNotEmpty("experience cannot be empty"),
            jobType:isNotEmpty("jobtype cannot be empty"),
            location:isNotEmpty("location cannot be empty"),
            packageOffered:isNotEmpty("package cannot be empty"),
            skillsRequired:isNotEmpty("skills cannot be empty"),
            about:isNotEmpty("about cannot be empty"),
            description:isNotEmpty("description cannot be empty")
            
        }
    })
    const hanlePost=()=>{

        form.validate();
        if(!form.isValid())return;
        postJob(form.getValues()).then((res)=>{
            successNotification("Successs","Job Posted Successfully");
            navigate("/posted-job")
        }).catch((err)=>{
            console.log(err);
            errorNotification("Post Failed",err.response.data.errorMessage);
        })
    }
  return (
    <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">Post a Job</div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="jobTitle" {...select[0]}/>
                 <SelectInput form={form} name="company" {...select[1]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="experience" {...select[2]}/>
                 <SelectInput form={form} name="jobType" {...select[3]}/>
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput form={form} name="location" {...select[4]}/>
                <NumberInput {...form.getInputProps('packageOffered')} label="Salary" withAsterisk placeholder="Enter Salary" hideControls  min={1}
      max={300} clampBehavior="strict" />
            </div>

            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skill" clearable splitChars={[',','|']} acceptValueOnBlur/>
            <Textarea {...form.getInputProps('about')} withAsterisk label="About Job" autosize minRows={3} placeholder="Enter About Job "
                            
                        />
            <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                <div className="text-sm font-medium">Job Description<span className="text-red-500">*</span></div>
                <TextEditor form={form}/>
            </div>
            <div className="flex gap-3"> 
                <Button  variant="light" color="brightSun.4" onClick={hanlePost}>Publish Job</Button>
                <Button  variant="outline" color="brightSun.4">Save as Draft</Button>
                   
            </div>
        </div>
    </div>
  )
}

export default PostJob