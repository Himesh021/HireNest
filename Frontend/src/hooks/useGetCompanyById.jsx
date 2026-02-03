import React, { useState, useEffect } from "react";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";
import { setSingleCompany } from "@/redux/companyslice";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyId}`,
          {
            withCredentials: true,
          },
        );
        if (response.data.success) {
          dispatch(setSingleCompany(response.data.company));
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching jobs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);

  return { loading, error };
};

export default useGetCompanyById;
