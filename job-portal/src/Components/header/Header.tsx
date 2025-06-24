import {  Button, Indicator } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFileLines, faGear } from "@fortawesome/free-solid-svg-icons"; // Import icons
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProfileManager } from "./ProfileManager";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotificationManager from "./NotificationManager";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { isEmail } from "@mantine/form";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user);
  const token=useSelector((state:any)=>state.jwt);
  // const profile = useSelector((state: any) => state.profile);
  const navigate=useNavigate()
  useEffect(()=>{
    setupResponseInterceptor(navigate);
    
  },[navigate])
  useEffect(() => {
      // console.log(profile)
    if(token!=""){
      const decode=jwtDecode(localStorage.getItem("token")||"");
      dispatch(setUser({...decode,email:decode.sub}));

      }
      if(!user) return;
      
      getProfile(user?.profileId).then((data: any) => {
          dispatch(setProfile(data));
          // console.log(data);

      }).catch((err) => {
          console.log(err);
      });
  }, [token,navigate])
  const location=useLocation();
  return (
   ( location.pathname!="/signup" &&
    location.pathname!="/login")?
    <div className="w-full bg-mine-shaft-800 px-6 text-white flex justify-between items-center p-3  font-sans">
      <div>
        <div className="text-2xl font-semibold flex gap-2 items-center text-bright-sun-400">
          <Link to="">
          <FontAwesomeIcon icon={faFileLines} /> {/* Replacing Tabler Icon */}
          Job~Matcher</Link>
        </div>
      </div>

      <NavLinks />

      <div className="flex gap-4 items-center">
        
        {user?<ProfileManager/>:
        <Link to="/login">
          <Button variant="subtle" color="brightSun.4">Login</Button>
        </Link>
        }

        {/* <div className="bg-mine-shaft-700 p-1.5 rounded-full">
          <FontAwesomeIcon icon={faGear} size="lg" /> 
        </div> */}
        {user?<NotificationManager/>:<></>}
      </div>
    </div> :<></>
  );
};

export default Header;
