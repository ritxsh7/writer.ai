
import { Story } from "../models/Story.js";

export const fetchStory = async(req, res) => {
    try{
        // console.log(req.body);
        const {title} = req.body;
        console.log(title);
        
        const story = await Story.findOne({title});
        console.log(story);
        res.status(200).json({
            success:true,
            data : story,
        })
    }catch(err){
        res.status(400).json({
            error : err.message,
        })
    }
}