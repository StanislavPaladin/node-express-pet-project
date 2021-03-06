import Post from "./post.js"
import fileService from "./fileService.js";
import sharp from "sharp";
import  { transliterate, slugify } from "transliteration";
class PostService {
    async create(post, picture, headerImage) {
        console.log(post, picture, headerImage);
        let titleTranslit = slugify(post.title, {
            separator: '_',
            unknown: '-'
          })
        const createdPost = await Post.create({
            ...post,
            alias: titleTranslit,
            picture: picture,
            headerImage: headerImage,
            createdAt: new Date()
        })
        console.log('пост создан');
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts
    }

    async getSomePosts() {
        const posts = await Post.find().sort({createdAt:-1}).limit(3)
        return posts
    }

    async getlastPost() {
        const posts = await Post.find().sort({createdAt:-1}).limit(1)
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Post.findById(id)
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
            new: true
        })
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            throw new Error('id не указан')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}
export default new PostService;