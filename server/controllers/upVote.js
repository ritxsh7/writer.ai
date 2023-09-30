
import { Story } from "../models/Story.js";

export const upVote = async (req, res) => {
    try{
        const {title} = req.body;
        console.log(title);
        const story = await Story.findOne({title});
        const votes = story.upvotes;
        const response = await Story.findOneAndUpdate({title},{ $set : {upvotes : votes + 1}},{new : true});
        res.status(200).json({
            success:true,
            message : response,
        })

    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
}