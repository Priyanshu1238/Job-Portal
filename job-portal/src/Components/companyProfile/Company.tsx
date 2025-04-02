// import React from 'react'

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar,  Divider, Tabs } from "@mantine/core"
import AboutCom from "./AboutCom"
import CompanyJobs from "./CompanyJobs"
import CompanyEmp from "./CompanyEmp"


const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="h-36 w-36  bg-mine-shaft-950 rounded-3xl left-5 border-mine-shaft-950 border-8 -bottom-1/4 absolute" src="/Icons/Google.png" alt="" />
            </div>
            <div className="px-3 mt-12">
                <div className="text-3xl font-semibold flex justify-between">Google
                    <Avatar.Group>
                        <Avatar src="avatar-7.png" />
                        <Avatar src="avatar-8.png" />
                        <Avatar src="avatar-9.png" />
                        <Avatar>+10k</Avatar>
                    </Avatar.Group>
                </div>
                
                <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> USA, London
                </div>
            </div>
            <Divider size="xs" my="lg" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="gallery">
                    <Tabs.List className="[&_button]:text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5 ">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employees">Employees</Tabs.Tab>

                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutCom/></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
                    <Tabs.Panel value="employees"><CompanyEmp/></Tabs.Panel>

                </Tabs>
            </div>
        </div>
    )
}

export default Company