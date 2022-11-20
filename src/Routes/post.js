const express = require('express');
const cloudinary = require('cloudinary').v2;


const Post = require('../Models/postSchema');
 
const router = express.Router();

  


cloudinary.config({ 
    cloud_name: 'dckw1lzpk', 
    api_key: '324375673437358', 
    api_secret: 'ytuncU-8l0eXxBldSAWUrti16OE' 
});

router.post("/upload",async (req,res)=>{
    console.log(req.body);
    const file = req.files.PostImage;
    console.log(file)

    cloudinary.uploader.upload(file.tempFilePath, async(err,result)=>{
        console.log(result);
        try{
            const posts = await Post.create({
                name: req.body.name,
                location: req.body.location,
                likes: req.body.likes,
                description: req.body.description,
                PostImage : result.url,
                date: req.body.date
            });
            res.json({
                status: "Success",
                posts
        
            })
    
        }catch(e){
            res.status(500).json({
                status: "Failed",
                message : e.message
        
            })
        }
    })
})

router.get("/show",async(req,res)=>{
    try{
        const posts = await Post.find().sort({_id:-1});
        res.status(200).json({
            posts
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})

router.get("/",async(req,res)=>{
    try{
        const posts = await Post.find().sort({_id:-1});
        res.status(200).json({
            posts
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})

module.exports = router;