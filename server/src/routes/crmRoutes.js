import { addNewQuestion,
        getQuestions,
        getQuestionByID,
        updateQuestion,
        deleteQuestion,
        getAnswers,
        addNewAnswer
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/api/question')
        // Get all Questions
        .get(getQuestions)

        // Create new Question
        .post(addNewQuestion);

    app.route('/api/question/:questionID')
        // Get specific Question by ID
        .get(getQuestionByID)

        // Update specific Question by ID
        .put(updateQuestion)

        // Delete specific Question by ID
        .delete(deleteQuestion);

    app.route('/api/answers')
        // Get all Answers
        .get(getAnswers);

    app.route('/api/answer')
        // Create new Answer
        .post(addNewAnswer);
}

export default routes;