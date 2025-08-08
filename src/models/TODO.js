import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    task_title: {
        type: String,
        requireed: true,
    },
    task_description: {
        type: String,
        required: true,
    },
    task_status:{
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
    task_priority:{
        type: String,
        enum: ['low', 'mdeium', 'high'],
        default: 'low',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
})

const TODO = mongoose.model("Todo", toDoSchema);

export default TODO;