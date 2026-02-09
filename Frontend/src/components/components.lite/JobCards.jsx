import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  if (!job) return null;
const navigate=useNavigate(); 
  return (
    <div  onClick={()=>navigate(`/description/${job._id}`)}
    className="bg-white border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:border-green-300 cursor-pointer">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-gray-800">{job.location}</p>

          <h1 className="text-lg font-semibold text-gray-800">
            {job.company?.name}
          </h1>
        </div>

        <Badge variant="outline" className="text-green-700 border-green-400">
          {job.jobType}
        </Badge>
      </div>

      {/* Job title */}
      <h2 className="mt-3 text-xl font-bold text-gray-900">{job.title}</h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
        {job.description}
      </p>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="ghost" className="text-black font-bold">
          {job.position} positions
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.salary} LPA
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.location}
        </Badge>
        <Badge variant="ghost" className="text-black font-bold">
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
