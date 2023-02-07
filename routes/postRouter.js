const express = require('express');
const postRouter = express.Router();
const Post = require('../models/postModel')

postRouter.route('/create').post((req,res)=>{
    console.log(req.body.title)
    const newPost = new Post({
        title:req.body.title,
        content:req.body.content
    }) 
    newPost.save()
})



postRouter.route("/post").get((req,res)=>{
   
    Post.find()
        .then(foundPosts=>res.json(foundPosts))
        .catch((err)=>{
            console.log(err)
        })
})

postRouter.route(`/delete/:id`).delete((req,res)=>{
    Post.findByIdAndDelete({_id:req.params.id})
    .then((doc)=>{console.log(doc)})
    .catch((err)=>{
        console.log(err)})

})

postRouter.route(`/update/:id`).put((req,res)=>{
    Post.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.title,
        content:req.body.content
    }).then(doc=>console.log(doc))
    .catch((err)=>{console.log(err)})
})
module.exports = postRouter;