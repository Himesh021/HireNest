import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAlljobs from "@/hooks/useGetAlljobs";

const Home = () => {
  useGetAlljobs();
  return (
    <div>
      <Header />
      <Categories />
      <LatestJobs />
      <Footer />
    </div>
  );
};

export default Home;
