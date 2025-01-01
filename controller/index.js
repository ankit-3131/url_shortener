import { nanoid } from 'nanoid'
// const model = require();
import model from '../models/schema.js'

async function handlerShortUrlGenerator(req, res){

    const data = req.body;
    if(!data.url) return res.json({message : "URL is required !!"})

    const short_id = await nanoid(10);
    const result = await model.create({
        short_id: short_id,
        user_url: data.url,
        visitHistory: [],
        createdBy: req.user._id
    });
    const allurls = await model.find({createdBy: req.user._id})

    return res.render('home', {shortUrl: result.short_id, urls: allurls});

}
export default handlerShortUrlGenerator;