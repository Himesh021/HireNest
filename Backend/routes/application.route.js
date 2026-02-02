import express from 'express';
import authenticateToken from '../middlewares/isAuthenticated.js';
import { applyToJob,getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';

const router = express.Router();

router.route('/apply/:jobId').post(authenticateToken,applyToJob);
router.route('/get').get(authenticateToken,getAppliedJobs); 
router.route('/:id/applicants').get(authenticateToken,getApplicants); 
router.route('/status/:id/update').post(authenticateToken,updateStatus);

export default router;