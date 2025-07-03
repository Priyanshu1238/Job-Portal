import { faBell, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Indicator, Menu, Notification } from "@mantine/core";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getNotification, readNotification } from "../../Services/NotificationIconService";


const NotificationManager = () => {
  const navigate=useNavigate()
    
    const user=useSelector((state:any)=>state.user);
    const [opened, setOpened] = useState(false);
    
   
    const [notifications,setNotifications]=useState<any>([]);
    useEffect(()=>{


      getNotification(user.id).then((res)=>{
        console.log(res);
        setNotifications(res);

      }).catch((err)=>{
        console.log(err)
      })

    },[user])
const unread=(index:number)=>{

  let notificationToBeFilter=[...notifications];
  notificationToBeFilter=notificationToBeFilter.filter((i:number)=>i!=index)
  setNotifications(notificationToBeFilter);
  readNotification(notifications[index].id).then((res)=>{
    console.log(res);
  }).catch((err)=>{

    console.log(err);
  })
}

  return (
    <Menu opened={opened} onChange={setOpened} shadow="md" width={400}>
                <Menu.Target>
                   <div className="bg-mine-shaft-700 p-1.5 rounded-full">
          <Indicator disabled={notifications.length<=0} color="brightSun.4" size={8} offset={6} processing>

            <FontAwesomeIcon icon={faBell} size="lg" /> {/* Replacing Tabler Icon */}
          </Indicator>
        </div>
                </Menu.Target>
    
                <Menu.Dropdown onChange={() => setOpened(true)}>
                  <div className="flex flex-col gap-1">
                 
                 {
                    notifications.map((notificationVar:any,index:any)=>
                  
                        <Notification onClick={()=>{
                          navigate(notificationVar.route);
                          unread(index);
                          setOpened(false)
                        }} onClose={()=>unread(index)}   className="hover:bg-mine-shaft-900 cursor-pointer"  title={notificationVar.action} icon={<FontAwesomeIcon  icon={faCheck}/>}>{notificationVar.message}</Notification>

                 )}
                 {
                  notifications.length==0&&<div className="text-center text-mine-shaft-300">No notifications</div>
                 }
        
                    
    </div>
                    
                </Menu.Dropdown>
            </Menu>
  )
}

export default NotificationManager