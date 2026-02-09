import Company from '../models/company.model.js';
import getDataUri from "../utils/datauri.js";
import cloudinary from '../utils/cloud.js'; 
//register company
export const  registerCompany = async (req, res) => {
  try {
   const { name: companyName } = req.body;
   if (!req.id) req.id = "507f1f77bcf86cd799439011"; // temporary for testing


    if(!companyName){
      return res.status(400).json({
         message: "Company name is required"});
      }
  // Check if company already exists
let company = await Company.findOne({ name: companyName });//point for learning--->
    if (company) {
      return res.status(400).json({message: "Company name already exists" });
    }

    company = await Company.create({ name: companyName,userId:req.id });

    return res.status(201).json({ message: `Company ${companyName} registered successfully`, company ,success:true });
  } catch (error) {
    console.error("Error during company registration:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
//get all companies
export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;//logein user id
    const companies = await Company.find({ userId });
    return res.status(200).json({ companies, success: true });

  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
};

//get company by id– Get single company
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const userId = req.id;
const company = await Company.findOne({
  _id: companyId,
  userId
});

    if(!company){
      return res.status(404).json({message: "Company not found",success:false});
    }
    return res.status(200).json({company,success:true});
  } catch (error) {
    console.error("Error fetching company by ID:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
};

//udate company details
export const updateCompany = async (req, res) => {
  try {
    const { name, description, location,website} = req.body;
    const updateData = {name, description, location,website};

const userId = req.id;
const company = await Company.findOneAndUpdate(
  { _id: req.params.id, userId },
  updateData,
  { new: true }
);


    if(!company){
      return res.status(404).json({message: "Company not found",success:false});
    }
    return res.status(200).json({message: "Company updated successfully",company,success:true});
  } catch (error) {
    console.error("Error updating company:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
};
