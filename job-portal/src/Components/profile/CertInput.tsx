// import React from 'react'


import fields from "../../Data/Profile"
import { SelectInput } from "./SelectInput"
import { Button,  TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationSErvice";

const CertInput = (props: any) => {
    const dispatch=useDispatch();
    // const [issueDate, setIssueDate] = useState<Date | null>(new Date());
    const profile=useSelector((state:any)=>state.profile);
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
                form.validate();
                if(!form.validate()) return ;
                let certi=[...profile.certifications];
                certi.push(form.getValues());
                certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
                let updatedProfile={...profile,certifications:certi};
                props.setEdit(false);
                dispatch(changeProfile(updatedProfile))
                // console.log(updatedProfile);
                successNotification("Success", "Certificate added successfully");
        
            }
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold text-bright-sun-300">Add Certificate</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <TextInput
                {...form.getInputProps("name")}
                    label="Title"
                    withAsterisk
                    placeholder="Enter Title"
                />
                <SelectInput form={form} name="issuer" {...select[1]} />
            </div>
            <div className="flex gap-10 [&>*]:w-1/2">
            <MonthPickerInput
            {...form.getInputProps("issueDate")}
                                
                                withAsterisk
                               
                                maxDate={new Date()}
                                label="Issue Date"
                                placeholder="Pick date"
                                // value={issueDate}
                                // onChange={setIssueDate}
                            />
            <TextInput
            {...form.getInputProps("certificateId")}
                    label="Certificate ID"
                    withAsterisk
                    placeholder="Enter ID"
                />
                
                
            </div>
           
            <div className="flex gap-5">
                <Button onClick={handleSave} color="green.8" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Discard</Button>

            </div>
        </div>
    )
}

export default CertInput