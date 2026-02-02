import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const Description = () => {
  const { id: jobId } = useParams();
  const dispatch = useDispatch();

  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  /* ---------------- APPLY JOB ---------------- */
  const applyJobHandler = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        {},
        { withCredentials: true },
      );

      if (res.data.success) {
        setIsApplied(true);

        const updatedJob = {
          ...singleJob,
          applications: [
            ...singleJob.applications,
            { applicant: { _id: user?._id } },
          ],
        };

        dispatch(setSingleJob(updatedJob));
        toast.success("Applied successfully");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Already applied");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- FETCH JOB ---------------- */
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));

          const applied = res.data.job.applications.some(
            (app) => app?.applicant?._id?.toString() === user?._id?.toString(),
          );

          setIsApplied(applied);
        }
      } catch (error) {
        toast.error("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  if (!singleJob) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* -------- HEADER -------- */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="font-bold text-2xl">{singleJob.title}</h1>

          <div className="flex flex-wrap gap-2 items-center mt-4">
            <Badge variant="ghost" className="text-blue-600 font-bold">
              {singleJob.position} Open Positions
            </Badge>
            <Badge variant="ghost" className="text-[#FA4F09] font-bold">
              {singleJob.salary} LPA
            </Badge>
            <Badge variant="ghost" className="text-[#6B3AC2] font-bold">
              {singleJob.location}
            </Badge>
            <Badge variant="ghost" className="text-black font-bold">
              {singleJob.jobType}
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied || loading}
          onClick={applyJobHandler}
          className={`rounded-lg px-6 ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#6B3AC2] hover:bg-[#552d9b]"
          }`}
        >
          {isApplied ? "Already Applied" : loading ? "Applying..." : "Apply"}
        </Button>
      </div>

      {/* -------- DESCRIPTION -------- */}
      <div className="border-b-2 border-gray-300 py-6 mt-6">
        <p className="text-gray-800">{singleJob.description}</p>
      </div>

      {/* -------- DETAILS -------- */}
      <div className="my-6 space-y-3">
        <Detail label="Role">{singleJob.position} Open Positions</Detail>

        <Detail label="Location">{singleJob.location}</Detail>

        <Detail label="Salary">{singleJob.salary} LPA</Detail>

        <Detail label="Experience">{singleJob.experience} Year</Detail>

        <Detail label="Total Applicants">
          {singleJob.applications?.length}
        </Detail>

        <Detail label="Job Type">{singleJob.jobType}</Detail>

        <Detail label="Post Date">{singleJob.createdAt?.split("T")[0]}</Detail>
      </div>
    </div>
  );
};

/* -------- REUSABLE DETAIL COMPONENT -------- */
const Detail = ({ label, children }) => (
  <div className="flex">
    <span className="font-bold w-40">{label}:</span>
    <span className="text-gray-800">{children}</span>
  </div>
);

export default Description;
