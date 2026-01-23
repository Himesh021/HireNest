import React, { useState } from "react";

const locations = [
  "Delhi",
  "Bangalore",
  "Mumbai",
  "Remote",
  "Hyderabad",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Lucknow",
  "Kanpur",
  "Patna",
  "Ranchi",
  "Bhubaneswar",
  "Cuttack",
  "Guwahati",
  "Shillong",
  "Dehradun",
];
const industries = ["IT", "Finance", "Healthcare", "E-commerce", "Education"];
const experiences = ["Fresher", "1-2 Years", "3-5 Years", "5+ Years"];

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    industry: [],
    experience: [],
  });

  const handleChange = (type, value) => {
    setSelectedFilters((prev) => {
      const alreadySelected = prev[type].includes(value);

      return {
        ...prev,
        [type]: alreadySelected
          ? prev[type].filter((item) => item !== value)
          : [...prev[type], value],
      };
    });
  };

  return (
    <div className="w-72 p-5 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col gap-6">
      <h2 className="text-xl font-bold">Filters</h2>

      {/* Location Filter */}
      <div>
        <h3 className="font-semibold mb-2">Location</h3>
        <div className="flex flex-col gap-2">
          {locations.map((loc) => (
            <label key={loc} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-green-600"
                onChange={() => handleChange("location", loc)}
              />
              <span className="text-sm">{loc}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div>
        <h3 className="font-semibold mb-2">Industry</h3>
        <div className="flex flex-col gap-2">
          {industries.map((ind) => (
            <label key={ind} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-green-600"
                onChange={() => handleChange("industry", ind)}
              />
              <span className="text-sm">{ind}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div>
        <h3 className="font-semibold mb-2">Experience</h3>
        <div className="flex flex-col gap-2">
          {experiences.map((exp) => (
            <label key={exp} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-green-600"
                onChange={() => handleChange("experience", exp)}
              />
              <span className="text-sm">{exp}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        className="mt-4 py-2 rounded-md bg-black text-white hover:bg-[#00A264] transition hover:shadow-green-200 cursor-pointer"
        onClick={() =>
          setSelectedFilters({ location: [], industry: [], experience: [] })
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
