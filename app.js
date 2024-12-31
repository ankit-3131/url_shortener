import express from 'express'
import path from 'path'
const app = express();
const  PORT = 5000;
import urlRoute from './router/url.js';
import userRoute from './router/user.js';
import connectDB from './controller/configDB.js';'./controller/configDB.js'

//getting this for ejs rendering
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.use('/url', urlRoute);
app.use('/user', userRoute)

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});