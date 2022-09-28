const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser = require('body-parser');
const { query } = require('express');
// Your routing code goes here

router.use(bodyparser());
router.get('/blog',async(req,res)=>{
    try {
        const data = await Blog.find(req.body)
    res.json({
        status:"success",
        data
    })
    } catch (err) {
        res.json({
            status:"failed",
            message:err.message
        })
    }
    
})
router.post('/blog',async(req,res)=>{
    try {
        const data = await Blog.create(req.body)
    res.json({
        status:"success",
        data
    })
    } catch (err) {
        res.json({
            status:"failed",
            message:err.message
        })
    }
    
})
router.get('/blog/:id',async(req,res)=>{
    try {
        const data = await Blog.find({_id:req.params.id})
    res.json({
        status:"success",
        data
    })
    } catch (err) {
        res.json({
            status:"failed",
            message:err.message
        })
    }
    
})
router.put('/blog/:id',async(req,res)=>{
    try {
         await Blog.updateOne({_id:req.params.id},req.body)
        const blog = await Blog.find({_id:req.params.id})

    res.json({
        status:"success",
        blog
    })
    } catch (err) {
        res.json({
            status:"failed",
            message:err.message
        })
    }
    
})
router.delete('/blog/:id',async(req,res)=>{
    try {
         await Blog.deleteOne({_id:req.params.id},req.body)
        const blog = await Blog.find({_id:req.params.id})

    res.json({
        status:"success",
        blog
    })
    } catch (err) {
        res.json({
            status:"failed",
            message:err.message
        })
    }
    
})

module.exports = router;