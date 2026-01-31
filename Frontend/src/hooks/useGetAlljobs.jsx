import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { useDispatch } from "react-redux";
import { setJobs } from "@/redux/jobSlice";

function useGetAlljobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_ENDPOINT}/get-all-jobs`, {
          withCredentials: true,
        });
        if (response.data.success) {
          dispatch(setJobs(response.data.jobs));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllJobs();
  }, []);
}

export default useGetAlljobs;
