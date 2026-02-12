import React, { useEffect } from "react";
import Header from "./Header";
import Categories from "./Categories";
import PopularJobs from "./PopularJobs";
import RecentJobs from "./RecentJobs";
import RecommendedJobs from "./RecommendedJobs";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAlljobs from "@/hooks/useGetAlljobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAlljobs(); // Trigger data fetch
  const jobs = useSelector((state) => state.jobs.allJobs); // Access Redux state

  console.log("Jobs in Component:", { loading, error, jobs }); // Log to check state
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <Header />
      <Categories />
      <PopularJobs />
      <RecentJobs />
      <RecommendedJobs />
      {/* {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>} */}
      {/* {!loading && !error && <LatestJobs jobs={jobs} />} */}
      <Footer />
    </div>
  );
};

export default Home;
