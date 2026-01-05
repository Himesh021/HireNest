import express from 'express';

import authenticatedToken from '../middlewares/isAuthenticated.js';
import { postJob, getAllJobs, getAdminJobs, getJobsById } from '../controllers/job.controller.js';  

const router = express.Router();

router.route('/post').post(authenticatedToken,postJob);
router.route('/get').get(authenticatedToken,getAllJobs); 
router.route('/getadminjobs').get(authenticatedToken,getAdminJobs); 
router.route('/get/:id').get(authenticatedToken,getJobsById);

export default router;