import Company from '../models/company.model.js';

//register company
export const  registerCompany = async (req, res) => {
  try {
    const {name} = req.body;
    const companyName = name;

    if(!companyName){
      return res.status(400).json({
         message: "Company name is required"});
      }
      
let company = await Company.findOne({ name: companyName });//point for learning--->
    if (company) {
      return res.status(400).json({message: "Company name already exists" });
    }

    company = await Company.create({ name: companyName,userId:req.id });

    return res.status(201).json({ message: `Company ${companyName} registered successfully`, company ,seuccess:true });
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
    if(companies.length === 0){
      return res.status(404).json({message: "No companies found",success:false});
    }
    return res.status(200).json({companies,success:true});

  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
};

//get company by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
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
    // const file= req.file; // Access the uploaded file
   
    //cloudinary upload
    const updateData = {name, description, location,website};

    const company= await Company.findByIdAndUpdate( req.params.id, updateData, { new: true } );

    if(!company){
      return res.status(404).json({message: "Company not found",success:false});
    } 
    return res.status(200).json({message: "Company updated successfully",company,success:true});
  } catch (error) {
    console.error("Error updating company:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
};