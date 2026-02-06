import { populate } from "dotenv";
import Job from "../models/job.model.js";

//1.post a job
export const postJob = async (req, res) => {
  try {
    // 1. Extract job details from request body
    const {
  title,
  description,
  requirements,
  salary,
  location,
  jobType,
  experience,
  position,
  companyId
} = req.body;
    const userId = req.id;

     if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false
      });
    }

    if (!title || !description || !requirements || !companyId || !location || !salary || !jobType || !position || !experience) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    //Create job in MongoDB
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experience,
      position,
      company: companyId,
      created_by: userId,
    });

    
    return res.status(201).json({
      message: "Job posted successfully",
      job,
      success: true
    });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//2.get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query= {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
        { jobType: { $regex: keyword, $options: "i" } },
        { requirements: { $regex: keyword, $options: "i" } },
        { position: { $regex: keyword, $options: "i" } },
      ]
    };
    //fetch jobs from DB
    const jobs= await Job.find(query);
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    } 
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//3.get job by id
export const getJobsById = async (req, res) => {
  try { 
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"applications",
       populate: {
    path: "applicant",
    select: "_id",
  },
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//4.Admin job created
export const getAdminJobs = async (req, res) => {
  try {
       const adminId=req.id;
    const jobs = await Job.find({ created_by: adminId }). populate ({
      path:"company",
      sort:{ createdAt: -1},
    });
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found for this admin",  
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching jobs by admin:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
