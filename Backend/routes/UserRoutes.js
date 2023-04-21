import express from 'express';
import { registerUser,loginUser } from '../controllers/UserControler.js';


const router = express.Router();

// router.route('/register',function() {
//     console.log('hello from register router')
// });

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

export default router;