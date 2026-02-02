import React from "react";
import { useSelector } from "react-redux";
import Job1 from "./Job1";

const Jobs = () => {
  const alljobs = useSelector((store) => store.jobs?.alljobs || []);

  if (!alljobs.length) {
    return <p className="text-center mt-6">No jobs found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {alljobs.map((job) => (
        <Job1 key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
