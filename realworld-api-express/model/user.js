const mongoose = require('mongoose');
const baseModel = require('./base-model')
const MD5 = require('../util/md5');

/**
 * Example
 * 
 * {
  "user": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "username": "jake",
    "bio": "I work at statefarm",
    "image": null
  }
}
 */

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        set: value => MD5(value),
        select: false
    },
    bio: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
    ... baseModel
});

module.exports = userSchema;