import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Job from "../models/job.model.js";
import { fileURLToPath } from "url";

dotenv.config();

// required for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// read jobs.json
const jobs = JSON.parse(
  fs.readFileSync(path.join(__dirname, "jobs.json"), "utf-8")
);

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Job.insertMany(jobs);

    console.log("✅ Job data imported successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Import failed:", error.message);
    process.exit(1);
  }
};

seedJobs();
