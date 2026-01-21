import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
          <span className="px-4 mx-auto py-2 rounded-full bg-black-200 text-green-600 font-medium">
            💼 Upload your CV-let recruiters find you
          </span>
          <h2 className="text-5xl font-bold">
            {" "}
            <span className="text-[#00A264]">Find the Job</span> You've <br />
            Been Dreaming Of!
          </h2>
          <p className="text-[#00A264]">
            Start your hunt for the best, life-changing career opportunities
            from here in your <br /> selected areas conveniently and get hired
            quickly.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input
              type="text"
              placeholder="Find Your Dream Job "
              className="outline-none border-none w-full"
            />
            <Button className=" rounded-r-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
