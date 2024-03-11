const mongoose=require('mongoose');
const Issue=require('../models/Issue');
const path=require('path');
const getAllIssueInfo=async(req,res,next)=>{
    try{
        const foundedIssue=await Issue.find().lean();
        if(!foundedIssue?.length){
            return res.status(400).json({msg:"No Issue Item is found"})
        }
        return res.status(200).json({message:"All Issue data retrieved", data: foundedIssue});
    }
    catch(err){
       next(err);
    }
}
const getOneIssueInfo=async (req,res,next)=>{
    const {id}=req.params;
    try{
        const foundedIssue=await Issue.findById(id).select("-__v").exec();
        if(!foundedIssue){
            return res.status(400).json({msg:"No Issue Data Found"})
        }
        return res.json({msg:"retrive issue successfully", data:foundedIssue});
    }
    catch(err){
        next(err)
    }
}
const createNewIssue=async(req,res,next)=>{
    const{title, description}=req.body;
    if(!title||!description){
        return res.json({msg:"All field required"});
    }
    const issueObject={
        title:title,
        description:description
    }
    const issue=await Issue.create(issueObject);
    if(issue){
        return res.statuus(201).json({message:`Item ${title} is successfully added.`})
    }
    else{
        return res.status(400).json({message:'Invalid data recieved'});
    }
}
const deleteIssueById=async(req, res, next)=>{
    const {id}=req.params;
    try{
        if(!id) return res.status(400).json({message: "Id required"});
        const foundedIssue=await Issue.findById(id).exec();
        const result=await Issue.deleteOne(foundedIssue).exec();
        res.json(result);
    }
    catch(err){
        console.log(err)
    }
}
const updateIssueData=async(req,res,next)=>{
    const {id, title, description}=req.body;
    try{
        if(!id) return res.status(400).json({message: "Missing data is required"});
        const foundedIssue=await Issue.findById(id).exec();
        if(!foundedIssue) return res.json({msg:"Issue not found"});
        foundedIssue.title=title;
        foundedIssue.description=description;
        const result=await foundedIssue.save();
        res.json(result);
    }
    catch(err){
        next(err);
    }
}
module.exports={
    getAllIssueInfo,
    getOneIssueInfo,
    createNewIssue,
    updateIssueData,
    deleteIssueById
}