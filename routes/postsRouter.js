const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController");

router.get("/AllPosts", postController.getAllposts);
router.get("/upload", postController.getPostByUploadId);
router.post("/create", postController.createPost);
router.put("/update/:id", postController.updatePost);
router.delete("/delete", postController.deletePost);
router.get("/:id", postController.getPost);

module.exports = router;
