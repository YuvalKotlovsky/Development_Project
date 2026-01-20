const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");

router.get("/AllComments-post/:postId", commentController.getAllCommentsPostId);

router.post("/create", commentController.createComment);

router.put("/update", commentController.updateComment);

router.delete('/delete', commentController.deleteComment);

module.exports = router;
