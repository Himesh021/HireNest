import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import FloatingTags from "./FloatingTags";

const Header = () => {
  return (
    <div className="relative text-center min-h-[70vh] flex items-center justify-center">
      {/* Floating background tags */}
      <FloatingTags />

      <motion.div
        className="flex flex-col gap-5 my-10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="px-4 mx-auto py-2 rounded-full bg-gray-100 text-green-600 font-medium">
          💼 Upload your CV – let recruiters find you
        </span>

        <h2 className="text-5xl font-bold">
          <span className="text-[#00A264]">Find the Job</span> You've <br />
          Been Dreaming Of!
        </h2>

        <p className="text-[#00A264]">
          Start your hunt for the best, life-changing career opportunities from
          here in your <br /> selected areas conveniently and get hired quickly.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
          <input
            type="text"
            placeholder="Find Your Dream Job"
            className="outline-none border-none w-full bg-transparent"
          />
          <Button className="rounded-r-full bg-[#00A264] hover:bg-[#008f58]">
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
