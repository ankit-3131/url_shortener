import express from 'express'
const router = express.Router();
import handlerShortUrlGenerator from '../controller/index.js'

router.route('/')
.get((req,res)=>{
    res.json({message: 'URL PAGE'});
})
.post(handlerShortUrlGenerator)


export default router
