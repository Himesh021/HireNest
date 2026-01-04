export const postJob = async (req, res) => {
  try {
    const { title, description, requirements, companyId, location, salary ,jobType,position,experience} = req.body;
    const userId = req.id;

    if (!title || !description || !requirements || !companyId || !location || !salary || !jobType || !position || !experience) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const job = await createImageBitmap({
      title,
      description,
      requirements:requirements.split(','),
      company:companyId,
      location,
      salary:Number(salary),
      jobType,
      position,
      experienceLevel:experience,
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
//get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query= $or([
      { title: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
      { location: { $regex: keyword, $options: "i" } },
      { jobType: { $regex: keyword, $options: "i" } },
      { requirements: { $regex: keyword, $options: "i" } },
      { position: { $regex: keyword, $options: "i" } },
    ]);
    const jobs= await Job.find(query);
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
      return res.status(200).json({
        jobs,
        success: true,
      });
    } 
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
//get job by id
export const getJobById = async (req, res) => {
  try { 
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
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
