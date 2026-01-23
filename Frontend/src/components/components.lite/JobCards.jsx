import React from "react";
import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-green-200 cursor-pointer hover:shadow-2xl hover:shadow-green-200 hover:p-3">
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>

      <div>
        <h2 className="font-bold text-lg my-2">Job Title</h2>
        <p className="text-sm text-gray-600">
          Job description goes here. This is a brief overview of the job role
          and responsibilities.
        </p>
      </div>
      <div>
        <Badge className={" text-black font-bold "} variant={"ghost"}>
          10 position
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
    </div>
  );
};

export default JobCards;
