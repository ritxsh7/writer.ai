import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    prompt : {
        type : String,
        required : true,
    },
    story : {
        type : String,
        reuired : true,
    },
    upvotes : {
        type : Number,
    }
})

export const Story = mongoose.model('Story', storySchema);