const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController");

router.get("/AllPosts", postController.getAllposts);
router.get("posts/:id", postController.getPost);
router.get("posts/upload", postController.getPostByUploadId);
router.post("posts/create", postController.createPost);
// router.put("/update/:id", postController.updatePost)
// router.delete("/delete", postController.deletePost)
router.put("/posts/update/:id", postController.updatePost)
router.delete("/posts/delete", postController.deletePost)

module.exports = router;
