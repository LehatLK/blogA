const express =require ('express');
const router = express.Router();
const controller = require ( '../controllers/postController');

router.get('/',controller.getAllPosts);
router.get('/:postId',controller.updatePost);
router.post('/',controller.getPostById);
router.delete('/:postId',controller.deletePost);
router.patch('/:postId',controller.updatePost);

module.exports = router;