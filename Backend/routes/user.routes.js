import express from 'express';
import { login,logout, updateProfile,register } from '../controllers/user.controller.js'; 
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(register);// singleUpload middleware removed for testing
router.route('/login').post(login); 
router.route('/logout').post(logout); 
router.route('/profile/update').post(isAuthenticated, singleUpload, updateProfile);

export default router;