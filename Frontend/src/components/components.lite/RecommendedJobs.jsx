import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "TechNova",
    match: "95% Match",
    location: "Remote",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    company: "AI Labs",
    match: "92% Match",
    location: "Bangalore",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    company: "Designify",
    match: "90% Match",
    location: "Delhi",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "CloudCore",
    match: "89% Match",
    location: "Hyderabad",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Finlytics",
    match: "88% Match",
    location: "Mumbai",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "InfraStack",
    match: "87% Match",
    location: "Remote",
  },
];

const RecommendedJobs = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles className="text-[#00A264]" />
          Recommended For You
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
            {/* Match Badge */}
            <span className="inline-block text-xs font-medium bg-[#00A264]/10 text-[#00A264] px-3 py-1 rounded-full mb-4">
              {job.match}
            </span>

            {/* Title */}
            <h2 className="text-lg font-semibold group-hover:text-[#00A264] transition">
              {job.title}
            </h2>

            {/* Company */}
            <p className="text-gray-500 text-sm mt-1">{job.company}</p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-gray-400 text-sm">{job.location}</span>

              <button className="text-sm font-medium text-[#00A264] opacity-0 group-hover:opacity-100 transition">
                Apply →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedJobs;
