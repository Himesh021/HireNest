import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      if (!user || user.role !== "Recruiter") {
        setError("User not authorized to fetch admin jobs.");
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.status) {
          // Updated success check
          dispatch(setAllAdminJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        if (error.response && error.response.status === 401) {
          setError("Unauthorized: Please log in as a Recruiter.");
        } else {
          setError(error.message || "An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch, user]);

  return { loading, error };
};

export default useGetAllAdminJobs;
