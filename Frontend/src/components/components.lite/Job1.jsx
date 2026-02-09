import { Bookmark, BookmarkCheck } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";

const Job1 = ({ job }) => {
  const {
    company,
    title,
    description,
    location,
    position,
    salary,
    experience,
    jobType,
    _id,
  } = job;
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const navigate = useNavigate();
  const daysAgo = (MongodbTime) => {
    const createdAt = new Date(MongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - createdAt.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 
                 transition-all duration-300 hover:shadow-xl hover:border-green-300
                 flex flex-col gap-4"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>
          {daysAgo(job.createdAt) === 0
            ? "Today"
            : `${daysAgo(job.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full"
          size="icon"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? <BookmarkCheck /> : <Bookmark />}
        </Button>
      </div>

      {/* Company + Location */}
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <p
            className={`text-sm ${
              job.location === "Remote"
                ? "font-bold text-green-700"
                : "font-medium text-gray-700"
            }`}
          >
            {job.location}
          </p>

          <h1 className="text-lg font-semibold text-gray-800">
            {job.company?.name}
          </h1>
        </div>
      </div>

      {/* Job Title + Description */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {job.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="ghost" className="text-black font-bold">
          {job.position} Positions
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.salary} LPA
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.experience}
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.jobType}
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <Button
          onClick={() => navigate(`/description/${job._id}`)}
          className="w-1/2 bg-black hover:bg-gray-800 text-white"
        >
          View Details
        </Button>

        <Button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`w-1/2 text-white ${
            isBookmarked
              ? "bg-green-600 hover:bg-green-700"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {isBookmarked ? "Saved" : "Save for Later"}
        </Button>
      </div>
    </div>
  );
};

export default Job1;
