import React from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Scientist",
  "Data Analyst",
  "DevOps Engineer",
  "UI/UX Designer",
  "Mobile App Developer",
  "Cloud Engineer",
  "QA Engineer",
];

const locations = [
  "Remote",
  "Delhi NCR",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Indore",
];

const experiences = [
  "Fresher",
  "Internship",
  "1-2 Years",
  "3-5 Years",
  "5+ Years",
];

const Browse = () => {
  const navigate = useNavigate();

  const handleBrowse = (type, value) => {
    // Later you can filter jobs using query params
    navigate(`/jobs?${type}=${value}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12">
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold">Browse Jobs</h1>
        <p className="text-gray-600 mt-2">
          Explore jobs by role, location, and experience level
        </p>
      </div>

      {/* Browse by Role */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Browse by Role</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {roles.map((role) => (
            <div
              key={role}
              onClick={() => handleBrowse("role", role)}
              className="p-4 border rounded-lg text-center cursor-pointer 
                         hover:bg-black hover:text-white transition"
            >
              {role}
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Location */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Browse by Location</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {locations.map((loc) => (
            <div
              key={loc}
              onClick={() => handleBrowse("location", loc)}
              className="p-4 border rounded-lg text-center cursor-pointer 
                         hover:bg-black hover:text-white transition"
            >
              {loc}
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Experience */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Browse by Experience</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {experiences.map((exp) => (
            <div
              key={exp}
              onClick={() => handleBrowse("experience", exp)}
              className="p-4 border rounded-lg text-center cursor-pointer 
                         hover:bg-black hover:text-white transition"
            >
              {exp}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
