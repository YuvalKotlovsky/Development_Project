const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController.js");

router.get("/AllComments-post/:postId", commentController.getAllCommentsPostId);

module.exports = router;
