// import { v4 as uuidv4 } from 'uuid';
import db from '../models/user.js';
import { setUser } from '../service/auth.js';
async function handlerUserLogin(req, res){
    const {email, password} = req.body;
    const userIsThere = await db.findOne({email,password});
    if(!userIsThere){
        return res.send("either email or password is wrong");
    }
    // const sessionId = uuidv4();
    const token = setUser(userIsThere);
    res.cookie("token", token);
    return res.redirect('/');
}

async function handlerUserSignup(req, res){

    const {firstName,lastName, email, password} = req.body;
    try{
    const event = await db.create({
        firstName:firstName,
        lastName: lastName,
        email:email,
        password:password
    });
    res.redirect('/user');}
    catch(err){
        console.log("ERROR CREATING AN USER", err);
    }
}
export {handlerUserLogin, handlerUserSignup};