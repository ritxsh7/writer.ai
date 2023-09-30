import { Story } from "../models/Story.js";

export const testRoute = async(req, res) => {
    console.log(req.body);
    try{
        const result = await Story.find({});
        res.status(200).json({
            data : result,
        })
    }catch(err){
        res.status(400).json({
            error : err.message,
        })
    }
}