import express from "express";
import QuestionController from "./controllers/question.controller";

const router = express.Router();

router.get("/", QuestionController.getQuestions);
router.post("/", QuestionController.createQuestion);
router.patch("/:id", QuestionController.patchQuestion);
router.delete('/:id', QuestionController.deleteQuestion)
router.get("/:id", QuestionController.getQuestionById);
router.get("/comment/:questionId", QuestionController.getCommentByQuestionId);
router.post("/comment", QuestionController.createComment);

export default router;
