import express from 'express';
import authenticateToken from '../middlewares/isAuthenticated.js';
import { registerCompany, getCompanies, getCompanyById, updateCompany } from '../controllers/company.controller.js';
import { singleUpload } from '../middlewares/multer.js';
const router = express.Router();

router.route('/register').post(registerCompany);
router.route('/get').get(getCompanies);
router.route('/get/:id').get(getCompanyById);
router.route('/update/:id').put(singleUpload,updateCompany);

export default router;