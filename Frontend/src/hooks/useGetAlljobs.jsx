import React, { useState, useEffect } from "react";
import axios from "axios";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

function useGetAllJobs() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((store) => store.jobs);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery}`,
          {
            withCredentials: true,
          },
        );
        if (response.data.success) {
          dispatch(setAllJobs(response.data.jobs));
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching jobs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, [dispatch]);

  return { loading, error };
}

export default useGetAllJobs;
