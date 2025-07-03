// import React from 'react'
// import React from 'react'
import { faCheck,  faPencil, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, TagsInput } from "@mantine/core"

import {  useState } from "react"


import { useDispatch, useSelector } from "react-redux"

import { changeProfile } from "../../Slices/ProfileSlice"
import { successNotification } from "../../Services/NotificationSErvice"
const Skills = () => {
    // const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

        // const [about, setAbout] = useState(`${props.about}`)

        // const select = fields;
        const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    // const user = useSelector((state: any) => state.user);
    const [skills, setSkills] = useState<string[]>([]);


    const dispatch = useDispatch();

    // const[addExp,setAddExp]=useState(false);
    // const[addCert,setAddCert]=useState(false);


    // const handleEdit = (index: any) => {
    //     const newEdit = [...edit];
    //     newEdit[index] = !newEdit[index];
    //     setEdit(newEdit);
    // }
    // const user=useSelector((state:any)=>state.user);
    // const profile=useSelector((state:any)=>state.profile);
    // useEffect(()=>{
    //     console.log(profile)
    //     getProfile(user.id).then((data:any)=>{
    //         console.log(data);

    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // },[])
    const handleClick = () => {
        if (!edit) {
            setEdit(true);
            setSkills(profile.skills);
            // form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location })
        }
        else {
            setEdit(false);

        }
    }
    // const form = useForm({
    //     mode: 'controlled',
    //     initialValues: { jobTitle: '', company: '', location: '' },

    // });
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = { ...profile, skills:skills };
        dispatch(changeProfile(updatedProfile))
        // console.log(updatedProfile);
        successNotification("Success", "Skills updated successfully");
    }
    return (
     
    <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
            <div>{edit&&
                            <ActionIcon onClick={() => handleSave()} color="green.8" variant="subtle" aria-label="Settings">
                             <FontAwesomeIcon icon={faCheck} className="h-3/5 w-3/5" /> 
                        </ActionIcon>
                                }
                            <ActionIcon onClick={() => handleClick()} color={edit?"red.8":"brightSun.4"} variant="subtle" aria-label="Settings">
                                {edit ? <FontAwesomeIcon  icon={faX} className="h-3/5 w-3/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                            </ActionIcon>
                            </div>
        </div>
        {
            edit ? <TagsInput
                value={skills} onChange={setSkills}
                placeholder="Add Skills"
                splitChars={[',', ' ', '|']}
            /> : <div className="flex flex-wrap gap-2">
                {
                    profile?.skills?.map((skill: any, index: number) => <div key={index} className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
                        {skill}
                    </div>)
                }
            </div>
        }

        {/* <div className="text-sm text-mine-shaft-300 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia minus fugit a dolor ea nemo unde totam nostrum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis magnam, molestias alias, dignissimos sunt incidunt numquam laudantium quasi deleniti qui. Numquam nobis nulla facere cupiditate pariatur eum quas ut cumque, iste quasi animi error.</div> */}



    </div>
  )
}

export default Skills