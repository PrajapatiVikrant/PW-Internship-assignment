import express from "express"
import auth from "../controller/auth.controller.js";

const router = express.Router();

router.post('/login',auth.login);
router.post('/signup',auth.signUp)


export default router;