import {getUser} from '../service/auth.js';

export async function whichUser(req, res, next){
    const userUid = req.cookies?.uid;
    const user = getUser(userUid);
    req.user = user;
    next();
}