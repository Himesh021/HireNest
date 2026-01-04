import express from 'express';
import { login,logout, updateProfile,register } from '../controllers/user.controller.js'; 
import authenticatedToken from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login); 
router.route('/logout').post(logout); 
router.route('/profile/update').post(authenticatedToken,updateProfile);

export default router;