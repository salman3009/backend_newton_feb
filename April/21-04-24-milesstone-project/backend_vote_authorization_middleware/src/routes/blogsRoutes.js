const express = require('express');
const router = express.Router();
const {createBlogs,getBlogs,getBlogsById,updateBlogsById,deleteBlogsById,updateBlogsComments,updateBlogsByVote} = require('../controllers/blogsController');
const isLogged = require('../middlewares/isLogged');
const authorization = require('../middlewares/authorization');
const voteauthorization = require('../middlewares/voteauthorization');

router.post('/',isLogged,createBlogs);
router.get('/',getBlogs);
router.get('/:id',getBlogsById);
router.patch('/:id',isLogged,authorization,updateBlogsById);
router.delete('/:id',isLogged,authorization,deleteBlogsById);
router.patch('/comments/:id',isLogged,updateBlogsComments);
router.patch('/vote/:id',isLogged,voteauthorization,updateBlogsByVote);
module.exports = router;