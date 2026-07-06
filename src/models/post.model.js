import {Schema, model} from 'mongoose';
import Comment from './comment.model.js';

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [Comment],
        default: []
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Post', postSchema, 'posts');