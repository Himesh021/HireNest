import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companyslice";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "sonner";

const CompanyCreate = () => {
  const [CompanyName, setCompanyName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        {
          name: CompanyName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(res.data);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Company Name</h1>
          <p className="text-gray-600">Company Description</p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          placeholder="Company Name"
          className="my-2"
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
