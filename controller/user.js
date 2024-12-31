
import db from '../models/user.js';
export async function handlerUserLogin(req, res){
    const {email, password} = req.body;
    const isThere = await db.findOne({email,password});
    if(!isThere){
        return res.send("either email or password is wrong");
    }
    res.redirect('/');
}

export async function handlerUserSignup(req, res){

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
// export default {handlerUserLogin, handlerUserSignup};