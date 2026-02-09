import express from 'express';
import authenticateToken from '../middlewares/isAuthenticated.js';
import { registerCompany, getCompanies, getCompanyById, updateCompany } from '../controllers/company.controller.js';
import { singleUpload } from '../middlewares/multer.js';
const router = express.Router();

router.route('/register').post(authenticateToken, registerCompany);
router.route('/get').get(authenticateToken, getCompanies);
router.route('/get/:id').get(authenticateToken, getCompanyById);
router.route('/update/:id').put(authenticateToken, singleUpload, updateCompany);

export default router;