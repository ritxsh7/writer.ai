import OpenAI from 'openai';
import dotenv from "dotenv";
import axios from 'axios';

//model
import { Story } from '../models/Story.js';
import { log } from 'console';

dotenv.config();

export const getStory = async(req, res) => {

    const {title, prompt, genre} = req.body;
    console.log(req.body);

    const content = `Generate a story on the prompt "${prompt}" of genre ${genre}`;
    // const test = prompt;

    console.log(content);
    const options = {
      method: 'POST',
      url: 'https://chatgpt-api6.p.rapidapi.com/standard-gpt',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST,
      },
      data: {
        messages: [
          {
            role: 'user',
            content, 
          }
        ],
        web_access: false,
        stream: false
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);

        const story = new Story({
            prompt : prompt,
            title : title,
            story : response.data.BOT,
            upvotes : 0,
        })

        try{
            const checkStory = await Story.findOne({prompt : prompt});
            if(checkStory){
                return res.status(400).json({
                    message : 'Story for this prompt already exists',
                })
            }
            await story.save();
        }catch(err){
            console.log(err.message);
        }

        return res.status(200).json({
            success : true,
            title : title,
            message : 'Story saved'
        });

    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            success : false,
            message : error.message,
        })
    }
}
