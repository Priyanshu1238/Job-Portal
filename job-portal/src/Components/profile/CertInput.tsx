// import React from 'react'

import { useState } from "react";
import fields from "../../Data/Profile"
import { SelectInput } from "./SelectInput"
import { Button,  TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";

const CertInput = (props: any) => {
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    const select = fields;
     const form = useForm({
                mode: 'controlled',
                validateInputOnChange:true,
                initialValues: { name: '', issuer: '' ,issueDate:new Date(),certificateId:''},
                validate:{
                    name:isNotEmpty("name is required"),
                    issuer:isNotEmpty("issuer is required"),
                    issueDate:isNotEmpty("issueDate is required"),
                    certificateId:isNotEmpty("certificateId is required")
                    
                }
        
            });
            const handleSave=()=>{
                
            }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold text-bright-sun-300">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                    label="Title"
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput
                                
                                withAsterisk
                               
                                maxDate={new Date()}
                                label="Issue Date"
                                placeholder="Pick date"
                                value={issueDate}
                                onChange={setIssueDate}
                            />
            <TextInput
                    label="Certificate ID"
                    withAsterisk
                    placeholder="Enter ID"
                />
                
                
            </div>
           
            <div className="flex gap-5">
                <Button onClick={handleSave} color="brightSun.4" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Discard</Button>

            </div>
        </div>
    )
}

export default CertInput