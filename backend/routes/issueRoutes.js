const express=require('express');
const router=express.Router();
const issueController=require('../controllers/issueController');

router.route('/')
    .get(issueController.getAllIssueInfo)
    .post(issueController.createNewIssue)
    .put(issueController.updateIssueData)
router.route('/:id')
    .get(issueController.getOneIssueInfo)
    .delete(issueController.deleteIssueById)
module.exports=router