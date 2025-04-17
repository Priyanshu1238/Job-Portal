import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const fields=[
    {
        label:"Job Title",
        placeholder:"Enter Job Title", 
       options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'], 
        // value:"Software Engineer",
       leftSection:faBriefcase
    },
    {
        label:"Company",
        placeholder:"Enter Company Name",
         options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'], 
        //  value:"Google",
         leftSection:faBriefcase
        },
    {
        label:"Location",
        placeholder:"Enter Job Location", 
        options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'],  
        // value:"New York,USA",
        leftSection:faMapMarkerAlt
    }
]
export default fields;