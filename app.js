import express from 'express'
import path from 'path'
const app = express();
const  PORT = 5000;
import urlRoute from './router/url.js';
import userRoute from './router/user.js';
import connectDB from './controller/configDB.js';'./controller/configDB.js'
import cookieParser from 'cookie-parser'
import checkAuth from './middlewares/checkAuth.js';
import { whichUser } from './middlewares/whichUser.js';
import model from './models/schema.js'


//getting this for ejs rendering
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.get('/', checkAuth,whichUser, async (req, res) => {
    console.log(req.user)
    const allurls = await model.find({createdBy: req.user._id});
    res.render('home.ejs', {urls: allurls});
})
app.use('/url', checkAuth, urlRoute);
app.use('/user', userRoute)

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});