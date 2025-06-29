// src/components/Card.tsx
import React from "react";
import { faBookBookmark, faBookmark, faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";

// Define the props for the Card component
interface CardProps {
  id: string;
  company: string;
  jobTitle: string;
  applicants?: any[];
  experience: string;
  jobType: string;
  location: string;
  about: string;
  packageOffered: string | number;
  postTime: string | number | Date;
  applied?: boolean;
  interviewing?: boolean;
  offered?: boolean;
  interviewTime?: string | number | Date;
}

const Card: React.FC<CardProps> = ({
  id,
  company,
  jobTitle,
  applicants = [],
  experience,
  jobType,
  location,
  about,
  packageOffered,
  postTime,
  applied = false,
  interviewing = false,
  offered = false,
  interviewTime,
}) => {
  const profile = useSelector((state: any) => state.profile);
  const dispatch = useDispatch();

  const handleSaveJob = () => {
    const savedJobs: string[] = profile.savedJobs ? [...profile.savedJobs] : [];
    const newSaved = savedJobs.includes(id)
      ? savedJobs.filter((jobId) => jobId !== id)
      : [...savedJobs, id];
    dispatch(changeProfile({ ...profile, savedJobs: newSaved }));
  };

  const renderInterviewTime = () => {
    if (!interviewing || !interviewTime) return null;
    const date = new Date(interviewTime);
    const formatted = date.toLocaleString(undefined, {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
    return (
      <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
        <FontAwesomeIcon icon={faCalendarDays} className="h-4 w-5 text-bright-sun-300" />
        <span className="font-semibold">{formatted}</span>
      </div>
    );
  };

  const isSaved = profile.savedJobs?.includes(id);
  const showSaveIcon = profile.accountType === "APPLICANT";

  return (
    <div className="bg-mine-shaft-900 p-4 w-[412px] flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mine-shaft-400">
      <div className="flex justify-between mb-2">
        <div className="flex gap-2 items-center">
          <img
            className="h-7"
            src={`./Icons/${company}.png`}
            alt={`${company} logo`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <div className="font-semibold">{jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {company} • {applicants.length} Applicants
            </div>
          </div>
        </div>

        {showSaveIcon && (
          <FontAwesomeIcon
            onClick={handleSaveJob}
            icon={isSaved ? faBookBookmark : faBookmark}
            className={`cursor-pointer ${isSaved ? 'text-bright-sun-400' : 'hover:text-bright-sun-400'}`}
          />
        )}
      </div>

      <div className="flex gap-2 text-xs [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg">
        <div>{experience}</div>
        <div>{jobType}</div>
        <div>{location}</div>
      </div>

      <Text className="!text-sm !text-mine-shaft-300 text-justify" lineClamp={3}>
        {about}
      </Text>

      <Divider size="xs" color="mineShaft.5" />

      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">₹{packageOffered} LPA</div>
        <div className="flex gap-1 items-center text-xs text-mine-shaft-400">
          <FontAwesomeIcon icon={faClock} />
          { interviewing ? "Interview" : "Posted"} {timeAgo(postTime)}
        </div>
      </div>

      {(offered || interviewing) && <Divider size="xs" color="mineShaft.5" mb="2" />}

      {offered && (
        <div className="flex gap-2">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="brightSun.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}

      {renderInterviewTime()}

      <Link to={`/jobs/${id}`}>
        <Button fullWidth variant="outline" color="brightSun.4">
          View Job
        </Button>
      </Link>
    </div>
  );
};

export default Card;
