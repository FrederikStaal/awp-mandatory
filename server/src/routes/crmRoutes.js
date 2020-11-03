import { addNewQuestion,
        getQuestions,
        getQuestionByID,
        updateQuestion,
        deleteQuestion
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/question')
        // Get all Questions
        .get(getQuestions)

        // Create new Question
        .post(addNewQuestion);

    app.route('/question/:questionID')
        // Get specific Question by ID
        .get(getQuestionByID)

        // Update specific Question by ID
        .put(updateQuestion)

        // Delete specific Question by ID
        .delete(deleteQuestion)
}

export default routes;