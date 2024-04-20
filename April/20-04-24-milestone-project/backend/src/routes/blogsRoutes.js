const express = require('express');
const router = express.Router();
const {createBlogs,getBlogs,getBlogsById,updateBlogsById,deleteBlogsById} = require('../controllers/blogsController');
const isLogged = require('../middlewares/isLogged');

router.post('/',isLogged,createBlogs);
router.get('/',isLogged,getBlogs);
router.get('/:id',getBlogsById);
router.patch('/:id',updateBlogsById);
router.delete('/:id',isLogged,deleteBlogsById);

module.exports = router;