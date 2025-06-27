import { Button } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProfileManager } from "./ProfileManager";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotificationManager from "./NotificationManager";

import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.jwt);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setupResponseInterceptor(navigate);
  }, [navigate]);

  useEffect(() => {
    if (token) {
      const decode: any = jwtDecode(token);
      dispatch(setUser({ ...decode, email: decode.sub }));
      getProfile(decode.profileId)
        .then((data) => {
          dispatch(setProfile(data));
        })
        .catch(console.error);
    }
  }, [token, dispatch]);

  // Skip header entirely on login/signup
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <div className="w-full bg-mine-shaft-800 px-6 text-white flex justify-between items-center p-3 font-sans">
      <div>
        <Link to="/" className="text-2xl font-semibold flex gap-2 items-center text-bright-sun-400">
          <FontAwesomeIcon icon={faFileLines} />
          Job~Matcher
        </Link>
      </div>

      <NavLinks />

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <ProfileManager />
            <NotificationManager />
          </>
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="brightSun.4">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
