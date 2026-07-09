import Post from '../models/post.model.js';

export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}

export const findPostById = async (id) => Post.findById(id).exec();

export const deletePost = async (id) => Post.findByIdAndDelete(id).exec();

export const addLike = async (id) => Post.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { returnDocument: 'after' }).exec();