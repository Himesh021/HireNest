import React from "react";

const CompanySetup = () => {
  return (
    <div>
      <div className="max-w-xl mx-auto my-10">
        <form action="">
          <div className="flex items-center gap-5 p-8">
            <Button
              className="flex items-center gap-2 text-gray-600 font-semibold"
              variant="outline"
            >
              <ArrorLeft />
              <span>Back</span>
            </Button>
            <h1 className="text-xl font-bold text-[#00A264]">Company Setup</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
