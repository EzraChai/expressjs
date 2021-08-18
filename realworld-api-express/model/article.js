const mongoose = require('mongoose');
const baseModel  = require('./base-model')
const Schema = mongoose.Schema

/**
 * Example
 * 
 * {
  "article": {
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
}
 */

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    favoriteCount:{
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tagList: {
      type: [String],
      default: null,
    },
    ...baseModel
});

module.exports = articleSchema;