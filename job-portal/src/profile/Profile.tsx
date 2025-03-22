// import React from 'react'

import { faMapMarkerAlt, faPencil, faPlus, faSave } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon,  Divider, TagsInput, Textarea } from "@mantine/core"
import ExpCard from "./ExpCard"
import CertCard from "./CertCard"
import { useState } from "react"

import fields from "../Data/Profile"
import { SelectInput } from "./SelectInput"
import ExpInput from "./ExpInput"
import CertInput from "./CertInput"



const Profile = (props: any) => {
    
    const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

    const [about, setAbout] = useState(`${props.about}`)

    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);

    const[addExp,setAddExp]=useState(false);
    const[addCert,setAddCert]=useState(false);


    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    return (
        <div className="w-4/5 mx-auto mt-2">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="h-48 w-48 rounded-full left-3 border-mine-shaft-900 border-8 -bottom-1/4 absolute" src="/avatar.jpg" alt="" />
            </div>
            <div className="px-3 mt-16 ">
                <div className="text-3xl font-semibold flex justify-between">{props.name}
                    <ActionIcon onClick={() => handleEdit(0)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        {edit[0] ? <FontAwesomeIcon icon={faSave} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[0] ? <><div className="flex gap-10 [&>*]:w-1/2">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                    </div>
                        <SelectInput {...select[2]} /></> : <>
                         <div className="text-xl flex ">{props.role} &bull; {props.company}</div>
                        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.location}
                        </div></>
                }


            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">About 

                <ActionIcon onClick={() => handleEdit(1)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        {edit[1] ? <FontAwesomeIcon icon={faSave} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[1]?  <Textarea autosize minRows={3} placeholder="Enter About Yourself"
                    value={about}
                    onChange={(event) => setAbout(event.currentTarget.value)}
                  />:<div className="text-sm text-mine-shaft-300 text-justify">{about} </div>
                }
              
                
            </div>
            <Divider size="xs" my="lg" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
                <ActionIcon onClick={() => handleEdit(2)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        {edit[2] ? <FontAwesomeIcon icon={faSave} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[2]?<TagsInput 
                    value={skills} onChange={setSkills}
                  placeholder="Add Skills"
                  splitChars={[',', ' ', '|']}
                />:<div className="flex flex-wrap gap-2">
                {
                    skills.map((skill: any, index: any) => <div key={index} className="bg-bright-sun-300 bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1 text-sm font-medium">
                        {skill}
                    </div>)
                }
            </div>
                }
                
                {/* <div className="text-sm text-mine-shaft-300 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia minus fugit a dolor ea nemo unde totam nostrum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis magnam, molestias alias, dignissimos sunt incidunt numquam laudantium quasi deleniti qui. Numquam nobis nulla facere cupiditate pariatur eum quas ut cumque, iste quasi animi error.</div> */}
                


            </div>
            <Divider size="xs" my="lg" />

            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2">
                <ActionIcon onClick={() => setAddExp(true)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        <FontAwesomeIcon icon={faPlus} className="h-4/5 w-4/5" />
                    </ActionIcon>
                <ActionIcon onClick={() => handleEdit(3)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        {edit[3] ? <FontAwesomeIcon icon={faSave} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon></div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        props.experience.map((exp: any, index: any) => <ExpCard key={index} {...exp} edit={edit[3]}/>)
                    }
                    {addExp &&<ExpInput add setEdit={setAddExp}/>}
                </div>

            </div>
            <Divider size="xs" my="lg" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between">Certification
                <div className="flex gap-2">
                <ActionIcon onClick={() => setAddCert(true)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        <FontAwesomeIcon icon={faPlus} className="h-4/5 w-4/5" />
                    </ActionIcon>
                <ActionIcon onClick={() => handleEdit(4)} color="brightSun.4" variant="subtle" aria-label="Settings">
                        {edit[3] ? <FontAwesomeIcon icon={faSave} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                    </ActionIcon></div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        props.certifications.map((cert: any, index: any) => <CertCard key={index} edit={edit[4]} {...cert} />)
                    }
                    {
                        addCert&&<CertInput setEdit={setAddCert}/>
                    }
                </div>
            </div>



        </div>
    )
}

export default Profile