import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Description = () => {
  const isApplied = false; // Example state to check if the user has applied
  return (
    <div>
      <div className="max-w-7xl ma-auto mx-4 my-4 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col gap-3 ">
            <h1 className="font-bold text-xl">Title</h1>
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
          </div>

          <div>
            <Button
              disabled={isApplied}
              className={`rounded-lg ${isApplied ? "bg-gray-400 cursor-not-allowed" : "bg-[#00A264] hover:bg-green-700 text-white"}`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
        <h1 className="border-b-2 border-b-gray-400 font-medium py-4 ">
          Job description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:
            <span className="font-normal text-gray-800 ">
              Software Engineer
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="font-normal text-gray-800 ">Remote</span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="font-normal text-gray-800 ">
              $8000 - $12000 P.A
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="font-normal text-gray-800 ">2-5 Years</span>
          </h1>
          <h1 className="font-bold my-1">
            Job Type:
            <span className="font-normal text-gray-800 ">Full Time</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Positions:
            <span className="font-normal text-gray-800 ">10</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Description;
