import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import FloatingTags from "./FloatingTags";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../../redux/jobSlice";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
  return (
    <div className="relative text-center min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 🔥 Background animation layer (DO NOT BLOCK CLICKS) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingTags />
      </div>

      {/* 🔥 Foreground content */}
      <motion.div
        className="flex flex-col gap-5 my-10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex w-[70%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto bg-white hover:shadow-[#00A264]/30 transition-shadow">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full bg-transparent"
          />
          <Button
            onClick={searchjobHandler}
            className="rounded-r-full bg-[#00A264] hover:bg-[#008f58]"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
        <h2 className="text-5xl font-bold">
          <span className="text-[#00A264] text-7xl">Find the Job</span> You've{" "}
          <br />
          Been Dreaming Of!
        </h2>

        {/* <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Start your hunt for the best, life-changing career opportunities from
          here in your <br /> selected areas conveniently and get hired quickly.
        </p> */}
      </motion.div>
    </div>
  );
};

export default Header;
