import express from 'express'

const app = express();
const  PORT = 5000;
import urlRoute from './router/url.js';
import connectDB from './controller/configDB.js';'./controller/configDB.js'
connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/url', urlRoute);

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});