import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const NavLinks = () => {
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    ...(user?.accountType === "EMPLOYER"
      ? [
          { name: "Post Job", url: "post-job" },
          { name: "Posted Job", url: "posted-job/0" },
        ]
      : user?.accountType === "APPLICANT"
      ? [{ name: "Dashboard", url: "job-history" }]
      : []),
  ];

  const handleClick = (url: string) => {
    navigate(`/${url}`);
    window.location.reload(); // 🔁 Force full page reload
  };

  return (
    <div className="flex gap-5 h-full items-center bg-mine-shaft-700 rounded-full p-3 border border-bright-sun-400">
      {links.map((link) => (
        <div
          key={link.url}
          className={`${
            location.pathname === "/" + link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-b-[1px] p-2 rounded-lg h-full cursor-pointer`}
          onClick={() => handleClick(link.url)}
        >
          {link.name}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
