import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../../redux/jobSlice";
import {
  Code,
  PenTool,
  Megaphone,
  BarChart,
  ClipboardList,
  Layers,
} from "lucide-react";

const categories = [
  {
    title: "Developers",
    description:
      "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
    icon: <Code size={40} color="#00A264" />,
    query: "Developer",
  },
  {
    title: "Designers",
    description:
      "Expert UI, UX, Visual, and Interaction designers as well as illustrators and animators.",
    icon: <PenTool size={40} color="#00A264" />,
    query: "Designer",
  },
  {
    title: "Marketing Experts",
    description:
      "Experts in digital marketing, content creation, brand strategy, and growth marketing.",
    icon: <Megaphone size={40} color="#00A264" />,
    query: "Marketing",
  },
  {
    title: "Management Consultants",
    description:
      "Business strategists, analysts, and consultants with financial and market expertise.",
    icon: <BarChart size={40} color="#00A264" />,
    query: "Consultant",
  },
  {
    title: "Project Managers",
    description:
      "Digital and technical project managers with expertise in tools and frameworks.",
    icon: <ClipboardList size={40} color="#00A264" />,
    query: "Project Manager",
  },
  {
    title: "Product Managers",
    description:
      "Scrum product owners and product managers experienced across industries.",
    icon: <Layers size={40} color="#00A264" />,
    query: "Product Manager",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-bold text-center mb-12">
        Leverage World-class{" "}
        <span className="text-7xl text-[#00A264]">Talent</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleSearch(cat.query)}
            className="cursor-pointer p-8 rounded-2xl border hover:shadow-xl transition duration-300 group hover:bg-[#00A264] hover:text-white"
          >
            <div className="mb-4">{cat.icon}</div>

            <h2 className="text-xl font-semibold mb-2">{cat.title}</h2>

            <p className="text-sm text-gray-600 group-hover:text-white">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
