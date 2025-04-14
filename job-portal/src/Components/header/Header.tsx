import {  Button, Indicator } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFileLines, faGear } from "@fortawesome/free-solid-svg-icons"; // Import icons
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import { ProfileManager } from "./ProfileManager";
import { useSelector } from "react-redux";

const Header = () => {
  const user=useSelector((state:any)=>state.user);
  const location=useLocation();
  return (
    location.pathname!="/signup" &&
    location.pathname!="/login"?
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
        <div className="bg-mine-shaft-700 p-1.5 rounded-full">
          <Indicator color="brightSun.4" size={8} offset={6} processing>
            <FontAwesomeIcon icon={faBell} size="lg" /> {/* Replacing Tabler Icon */}
          </Indicator>
        </div>
      </div>
    </div> :<></>
  );
};

export default Header;
