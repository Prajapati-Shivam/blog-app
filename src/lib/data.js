import { connectDb } from './connectDb';
import { Post, User } from './models';

export const getPosts = async () => {
  try {
    connectDb();
    let posts = await Post.find();
    posts.map((p) => JSON.parse(JSON.stringify(p)));
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};

export const getPost = async (slug) => {
  try {
    connectDb();
    let post = await Post.findOne({ slug });
    post = JSON.parse(JSON.stringify(post));
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};

export const getPostByUserId = async (userId) => {
  try {
    connectDb();
    let posts = await Post.find({ userId });
    posts.map((p) => JSON.parse(JSON.stringify(p)));
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};
export const getUser = async (id) => {
  try {
    connectDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user');
  }
};
