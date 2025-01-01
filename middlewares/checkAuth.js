import {getUser} from '../service/auth.js';
async function checkAuth(req, res, next){
    const userUid = req.cookies?.uid;
    if(!userUid){
        return res.redirect('/user');
    }
    const user = getUser(userUid);
    if(!user){
        return res.redirect('/user');
    }
    req.user = user;
    next();
}
export default checkAuth;