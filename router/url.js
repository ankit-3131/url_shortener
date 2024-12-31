import express from 'express'
const router = express.Router();
import handlerShortUrlGenerator from '../controller/index.js'
import urlModel from '../models/schema.js'

router.route('/')
.get((req,res)=>{
    res.json({message: 'URL PAGE'});
})
.post(handlerShortUrlGenerator)

router.route('/:shortId')
.get(async (req,res)=>{
    try{
    const shortId = req.params.shortId
    const data = await urlModel.findOneAndUpdate(
        {
        shortId
    },
        {
            $push:{
                visitHistory:{
                    timestamps : Date.now()
        },
    },
}
    );
    if(!data) return res.json({message: "URL was unknown to us !"});
    res.redirect(data.user_url);}
    catch(error){console.error(error);
    }
})

export default router
