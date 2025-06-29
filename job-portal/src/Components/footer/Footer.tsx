// src/components/Footer.tsx
import React from "react";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

type LinkItem = {
  label: string;
  path: string;
};

type Section = {
  title: string;
  links: LinkItem[];
};

const footerLinks: Section[] = [
  {
    title: "Product",
    links: [
      { label: "Find Job", path: "/find-jobs" },
      { label: "Find Company", path: "/find-company" },
      { label: "Find Employee", path: "/find-talent" }
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Contact Us", path: "/contact" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms" }
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help & Support", path: "/support" },
      { label: "Feedback", path: "/feedback" },
      { label: "FAQs", path: "/faqs" }
    ],
  }
];

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/signup" || location.pathname === "/login") return null;

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <footer className="p-20 flex gap-5 justify-around bg-mine-shaft-950 font-sans">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="text-2xl font-semibold flex gap-2 items-center text-bright-sun-400">
          <FontAwesomeIcon icon={faFileLines} />
          <span className="text-xl font-semibold">Job~Matcher</span>
        </div>
        <p className="text-sm text-mine-shaft-300">
          Job portal user profile, skill updates, certifications, work experience and admin job postings.
        </p>
        <div className="flex gap-3 text-xl text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-1 [&>div]:rounded-full hover:[&>div]:bg-mine-shaft-700">
          <div><FontAwesomeIcon icon={faFacebook} /></div>
          <div><FontAwesomeIcon icon={faInstagram} /></div>
          <div><FontAwesomeIcon icon={faXTwitter} /></div>
        </div>
      </div>

      {footerLinks.map((sec, si) => (
        <div key={si}>
          <h4 className="text-lg font-semibold mb-4 text-bright-sun-400">{sec.title}</h4>
          {sec.links.map((link, li) => (
            <div
              key={li}
              className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1"
              onClick={() => handleNav(link.path)}
            >
              {link.label}
            </div>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
