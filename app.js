import express from 'express'

const app = express();
const  PORT = 5000;
import urlRoute from './router/url.js';
import connectDB from './controller/configDB.js';'./controller/configDB.js'
import urlModel from './models/schema.js'
connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/url', urlRoute);

app.get('/:shortId', async (req,res)=>{
    try{
    const shortId = req.params.shortId
    const event = await urlModel.findOneAndUpdate(
        {
            short_id: shortId
    },
        {
            $push:{
                visitHistory:{
                    timestamps : Date.now()
        },
    },
}
    );
    if (!event) {
        return res.json({ message: "URL was unknown to us!" });
    }
    return res.redirect(event.user_url)}

    catch(error){console.error(error);
    }
})

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});