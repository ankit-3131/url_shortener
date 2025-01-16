import {getUser} from '../service/auth.js';
async function checkAuth(req, res, next){
    const token = req.cookies?.token;
    if(!token){
        return res.redirect('/user');
    }
    const user = getUser(token);
    if(!user){
        return res.redirect('/user');
    }
    req.user = user;
    next();
}
export default checkAuth;