import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Sparkles } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "React Developer",
    company: "StartupX",
    location: "Remote",
    posted: "2 hours ago",
  },
  {
    id: 2,
    title: "Node.js Engineer",
    company: "TechCorp",
    location: "Pune",
    posted: "5 hours ago",
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "OpenAI Labs",
    location: "Bangalore",
    posted: "1 day ago",
  },
  {
    id: 4,
    title: "UI Designer",
    company: "DesignPro",
    location: "Delhi",
    posted: "2 days ago",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "FinTech Ltd",
    location: "Mumbai",
    posted: "3 days ago",
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "CloudNet",
    location: "Hyderabad",
    posted: "4 days ago",
  },
];

const RecentJobs = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles className="text-[#00A264]" />
          Recent Jobs
        </h1>

        <button
          onClick={() => navigate("/browse")}
          className="text-[#00A264] font-semibold hover:underline"
        >
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => navigate("/browse")}
            className="group border rounded-2xl p-6 bg-white hover:shadow-2xl transition duration-300 cursor-pointer hover:border-[#00A264]"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold group-hover:text-[#00A264] transition">
              {job.title}
            </h2>

            {/* Company */}
            <p className="text-gray-500 text-sm mt-1">{job.company}</p>

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-gray-400">{job.location}</span>

              <span className="flex items-center gap-1 text-xs text-[#00A264] font-medium">
                <Clock size={14} />
                {job.posted}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentJobs;
