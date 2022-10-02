import QuestionService from "../services/question.service.js";
import humps from "humps";

export default {
  async getQuestions(req, res) {
    const { order, search } = req.query;
    const data = await QuestionService.findAll(order, search);
    res.status(200).json({
      success: true,
      data,
    });
  },
  async getQuestionById(req, res) {
    const { id } = req.params;
    const data = await QuestionService.findOneById(+id);
    res.status(200).json({
      success: true,
      data: data ? data : {},
    });
  },
  async createQuestion(req, res) {
    const data = await QuestionService.create(humps.camelizeKeys(req.body));
    res.status(201).json({
      success: true,
      data,
    });
  },
  async patchQuestion(req, res) {
    const { id } = req.params;
    const data = await QuestionService.patchById(+id, req.body);
    res.status(201).json({
      success: true,
      data,
    });
  },
  async deleteQuestion(req, res) {
    const { id } = req.params;
    const puestion = await QuestionService.deleteById(+id);
    if (puestion) {
      res.status(200).json({
        success: true,
        data: puestion,
      });
    } else {
      res.status(204).json({
        success: false,
      });
    }
  },
  async getCommentByQuestionId(req, res) {
    const { questionId } = req.params;
    const data = await QuestionService.findCommentByQuestionId(questionId);
    res.status(200).json({
      success: true,
      data,
    });
  },
  async createComment(req, res) {
    const data = await QuestionService.createComment(humps.decamelizeKeys(req.body));
    res.status(201).json({
      success: true,
      data,
    });
  },
};
