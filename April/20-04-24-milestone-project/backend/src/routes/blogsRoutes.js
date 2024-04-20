const express = require('express');
const router = express.Router();
const {createBlogs,getBlogs,getBlogsById,updateBlogsById,deleteBlogsById,updateBlogsComments} = require('../controllers/blogsController');
const isLogged = require('../middlewares/isLogged');
const authorization = require('../middlewares/authorization');

router.post('/',isLogged,createBlogs);
router.get('/',isLogged,getBlogs);
router.get('/:id',getBlogsById);
router.patch('/:id',isLogged,authorization,updateBlogsById);
router.delete('/:id',isLogged,authorization,deleteBlogsById);
router.patch('/comments/:id',isLogged,updateBlogsComments);
module.exports = router;