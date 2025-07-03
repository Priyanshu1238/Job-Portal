// import React from 'react'
import {  faPencil, faPlus, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon} from "@mantine/core"
import ExpCard from "./ExpCard"

import {  useState } from "react"

// import fields from "../../Data/Profile"
// import { SelectInput } from "./SelectInput"
import ExpInput from "./ExpInput"
// import CertInput from "./CertInput"
import {  useSelector } from "react-redux"

const Experiences = () => {
    // const [skills,setSkills]=useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"]);

    // const [about, setAbout] = useState(`${props.about}`)

    // const select = fields;
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state: any) => state.profile);
    // const user = useSelector((state: any) => state.user);
    const [addExp, setAddExp] = useState(false);


    // const dispatch = useDispatch();

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
        setEdit(!edit)
        // if (!edit) {
        //     setEdit(true);
        //     setAbout(profile.about);
        //     // form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location })
        // }
        // else {
        //     setEdit(false);

        // }
    }
    // const form = useForm({
    //     mode: 'controlled',
    //     initialValues: { jobTitle: '', company: '', location: '' },

    // });
    // const handleSave = () => {
    //     setEdit(false);
    //     let updatedProfile = { ...profile, about: about };
    //     dispatch(changeProfile(updatedProfile))
    //     // console.log(updatedProfile);
    //     successNotification("Success", "About updated successfully");
    // }
    return (

        <div className="px-3">
            <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2">
                <ActionIcon onClick={() => setAddExp(true)} color="brightSun.4" variant="subtle" aria-label="Settings">
                    <FontAwesomeIcon icon={faPlus} className="h-4/5 w-4/5" />
                </ActionIcon>
                <ActionIcon onClick={() => handleClick()} color={edit?"red.8":"brightSun.4"}  variant="subtle" aria-label="Settings">
                    {edit ? <FontAwesomeIcon icon={faX} className="h-4/5 w-4/5" /> : <FontAwesomeIcon icon={faPencil} className="h-4/5 w-4/5" />}
                </ActionIcon></div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    profile?.experiences?.map((exp: any, index: any) => <ExpCard key={index} {...exp} index={index} edit={edit} />)
                }
                {addExp && <ExpInput add setEdit={setAddExp} />}
            </div>

        </div>
    )
}

export default Experiences