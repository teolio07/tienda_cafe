const express = require('express');
const {createCommnent, getComments, updateComment } = require('../controllers/commentController');
const commentRouter = express.Router();

commentRouter.get('/getComments', getComments);
commentRouter.post('/createComment',createCommnent)
commentRouter.put('/updateComment',updateComment)

module.exports = commentRouter;

