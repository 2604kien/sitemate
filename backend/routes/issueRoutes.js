const express=require('express');
const router=express.Router();
const issueController=require('../controllers/issueController');

router.route('/')
    .get(issueController.getAllIssueInfo)
    .post(issueController.createNewIssue)
router.route('/:id')
    .get(issueController.getOneIssueInfo)
    .put(issueController.updateIssueData)
    .delete(issueController.deleteIssueById)
module.exports=router