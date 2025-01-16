import {getUser} from '../service/auth.js';

export async function whichUser(req, res, next){
    const token = req.cookies?.token;
    const user = getUser(token);
    req.user = user;
    next();
}