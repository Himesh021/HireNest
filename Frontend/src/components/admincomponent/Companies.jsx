import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { setSearchCompanyByText } from "@/redux/companyslice";

const Companies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetAllCompanies();

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <Input
            placeholder="Filter by Name"
            className="max-w-xs"
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            className="bg-black text-white hover:bg-black/90"
            onClick={() => navigate("/admin/companies/create")}
          >
            Add Company
          </Button>
        </div>

        {/* Table Section */}
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-sm border">
            <CompaniesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
