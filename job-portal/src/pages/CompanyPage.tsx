import { Button, Divider } from '@mantine/core'
// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import REcommendTalent from '../TalentProfile/REcommendTalent'
// import Profile from '../TalentProfile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Company from '../Components/companyProfile/Company'
import SimilarCompanies from '../Components/companyProfile/SimilarCompanies'
// import { profile } from '../Data/TalentData'


const CompanyPage = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-sans p-2">
            {/* <Link  className="my-5 inline-block " to="/jobs"> */}
                <Button onClick={()=>navigate(-1)} my="md" leftSection={<FontAwesomeIcon icon={faArrowLeft}/>} variant="light" color="brightSun.4">Back</Button>
            {/* </Link> */}
            
            <div className="flex gap-5 justify-between">
                <Company/>
                <Divider orientation='vertical'/>
                <SimilarCompanies/>
            </div>
            
    
        </div>
  )
}

export default CompanyPage