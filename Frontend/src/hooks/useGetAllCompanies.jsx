import React, { useState, useEffect } from "react";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { useDispatch } from "react-redux";
import { setCompanies } from "@/redux/companysliceSlice";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log("called");
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
