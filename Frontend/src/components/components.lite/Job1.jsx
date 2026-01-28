import { Bookmark, BookmarkCheck } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const [saved, setSaved] = useState(false);
  const naviagate = useNavigate();
  const jobId = 1; // Example job ID
  return (
    <div
      className="p-5 rounded-xl shadow-md bg-white border border-gray-200 cursor-pointer 
                 hover:shadow-xl hover:shadow-green-200 transition-all duration-300 flex flex-col gap-4"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>3 days ago</p>
        <Button
          variant="outline"
          className="rounded-full"
          size="icon"
          onClick={() => setSaved(!saved)}
        >
          {saved ? (
            <BookmarkCheck className="w-5 h-5 text-green-600" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Company Info */}
      <div>
        <h1 className="text-lg font-semibold">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>

      {/* Job Info */}
      <div>
        <h2 className="font-bold text-lg my-1">Frontend Developer</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          Job description goes here. This is a brief overview of the job role
          and responsibilities.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge className={" text-black font-bold "} variant={"ghost"}>
          10 Positions
        </Badge>
        <Badge className={" text-black font-bold "} variant={"ghost"}>
          20 LPA
        </Badge>
        <Badge className={" text-black font-bold "} variant={"ghost"}>
          Remote
        </Badge>
        <Badge className={" text-black font-bold "} variant={"ghost"}>
          Full Time
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-3">
        {/* View Details */}
        <Button
          onClick={() => {
            naviagate(`/description/${jobId}`);
          }}
          className="w-1/2 bg-black hover:bg-gray-800 text-white"
        >
          View Details
        </Button>

        {/* Save for Later */}
        <Button
          className={`w-1/2 ${
            saved
              ? "bg-green-600 hover:bg-[#00A264]"
              : "bg-black hover:bg-gray-800"
          } text-white`}
          onClick={() => setSaved(!saved)}
        >
          {saved ? "Saved" : "Save for Later"}
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
