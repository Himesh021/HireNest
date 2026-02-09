import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { alljobs } = useSelector((store) => store.jobs);

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold ">
        <span className="text-[#00A264]">Latest</span> Jobs Openings
      </h2>
      {/* Job Cards Container */}

      <div className="grid grid-cols-3 gap-4 my-5">
        {alljobs.length <= 0 ? (
          <span className="text-center w-full block">No Jobs Available</span>
        ) : (
          alljobs
            .slice(0, 6)
            .map((job, index) => <JobCards key={job.id} job={job}></JobCards>)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
