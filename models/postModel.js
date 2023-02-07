const express = require("express");

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title:String,
    content:String
})

const Post = mongoose.model("posts",postSchema)

module.exports = Post;