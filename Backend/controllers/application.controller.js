// import { populate } from 'dotenv';
import Application from '../models/application.model.js';
import Job from '../models/job.model.js';

//1.apply to a job
export const applyToJob = async (req, res) => {
  try {
    // 1. EXTRACT userId and jobId from request
    const userId = req.id;
    const jobId = req.params.jobId;
    if (!jobId) {
      return res.status(400).json({
        message: "Job ID is required",
        success: false,
      });
    }
    // 2. Check if the user has already applied to this job
    const existingApplication = await Application.findOne({ applicant: userId, job: jobId });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied to this job",
        success: false,
      });
    }
    // 3. Check if the job exists
    const job =await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    // 4. Create a new application
    const newApplication = new Application({
      applicant: userId,
      job: jobId,
    });

    // SAVE application in DB
await newApplication.save();

//link application to job
    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).json({
      message: "Application submitted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error applying to job:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//2.get all applied jobs for a user
export const getAppliedJobs = async (req, res) => {
  try {
    // Extract userId from request
    const userId = req.id;  
    const applications = await Application
    .find({ applicant: userId })
    .sort({createdAt: -1})
    .populate({
      path: "job",
      options: { sort: { createdAt: -1 } }
    });
    if(!applications || applications.length===0){
      return res.status(404).json({
        message: "No applied jobs found", 
        success: false,
      });
    }
    return res.status(200).json({
      applications,
      success: true
    });
  } catch (error) {
    console.error("Error fetching applied jobs:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//3.get all applications for a job
export const getApplicants = async (req, res) => {
  try {
     const jobId = req.params.jobId;
     const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: { path: "applicant", options: { sort: { createdAt: -1 } } } 
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
       job,
      success: true
    });
  } catch (error) {
    console.error("Error fetching applicants:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//4.update application status
export const updateStatus = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const { status } = req.body;
  if(!status){
      return res.status(400).json({
        message: "invalid status",
        success: false,
      });
    }
    // Find the application by ID and update its status
    const application = await Application.findById({_id:applicationId});  
    if(!application){
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }

    // Update the status
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "Application status updated successfully",
      success: true,
    });
  } catch (error) {
     console.error(error);
     res.status(500).json({
       message: "Internal server error",
       success: false,
     });
  }
};