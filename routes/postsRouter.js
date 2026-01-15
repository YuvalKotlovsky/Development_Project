const express = require("express");
const router = express.Router();
const postController = require("../controller/postsController.js");

router.get("/AllPosts", postController.getAllposts);
router.get("/:id", postController.getPost);
router.get("/", postController.getPostByUploadId);
module.exports = router;
