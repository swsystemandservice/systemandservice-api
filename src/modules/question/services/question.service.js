import QuestionRepository from "../repositories/question.repository.js";

const QuestionService = {
  findAll: async (order, search) => await QuestionRepository.findAll(order, search),
  findOneById: async (id) => await QuestionRepository.findOneById(id),
  create: async (data) => {
    await QuestionRepository.create({ ...data });
    return await QuestionRepository.findAll();
  },
  patchById: async (id, data) => {
    const result = await QuestionRepository.findOneById(id);
    if (result) {
      const updated = await QuestionRepository.patchById(result.id, { ...data });
      if (updated) {
        return await QuestionRepository.findOneById(id);
      }
    }
    return null;
  },
  deleteById: async (id) => {
    const result = await QuestionRepository.findOneById(id);
    if (result) {
      const deleted = await QuestionRepository.deleteById(id);
      if (deleted) {
        return await QuestionRepository.findAll();
      }
    }
    return false;
  },
  findCommentByQuestionId: async (questionId) => await QuestionRepository.findCommentByQuestionId(questionId),
  createComment: async (data) => await QuestionRepository.createComment({ ...data }),
};

export default QuestionService;
