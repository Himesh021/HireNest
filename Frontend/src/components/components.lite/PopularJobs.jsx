import { Sparkles } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    type: "Full Time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    type: "Full Time",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Adobe",
    type: "Part Time",
    location: "Delhi",
  },
  {
    id: 4,
    title: "Full Stack Engineer",
    company: "Microsoft",
    type: "Full Time",
    location: "Hyderabad",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Meta",
    type: "Remote",
    location: "India",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Netflix",
    type: "Full Time",
    location: "Remote",
  },
];

const PopularJobs = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles className="text-[#00A264]" />
          PopularJobs
        </h1>

        <button
          onClick={() => navigate("/browse")}
          className="text-[#00A264] font-semibold hover:underline"
        >
          View All
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => navigate("/browse")}
            className="cursor-pointer border rounded-2xl p-6 hover:shadow-xl transition duration-300 hover:border-[#00A264]"
          >
            <h2 className="text-lg font-semibold mb-1">{job.title}</h2>

            <p className="text-gray-500 text-sm">{job.company}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-[#00A264] text-sm font-medium">
                {job.type}
              </span>

              <span className="text-gray-400 text-sm">{job.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularJobs;
