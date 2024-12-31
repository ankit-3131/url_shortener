import express from 'express'
const router = express.Router();
import handlerShortUrlGenerator from '../controller/index.js'
import urlModel from '../models/schema.js'

router.route('/')
.get((req,res)=>{
    res.json({message: 'URL PAGE'});
})
.post(handlerShortUrlGenerator)

router.get('/:shortId', async (req,res)=>{
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
export default router
