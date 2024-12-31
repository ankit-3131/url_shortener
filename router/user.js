import express from 'express'
const router = express.Router();
import {handlerUserLogin, handlerUserSignup} from '../controller/user.js'


router.route('/')
.get((req, res)=>{
    res.render('login.ejs');
})
.post(handlerUserLogin)

router.route('/signup')
.get((req, res)=>{
    res.render('signup.ejs');
})
.post(handlerUserSignup)

export default router


