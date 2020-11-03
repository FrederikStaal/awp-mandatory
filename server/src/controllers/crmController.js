import mongoose from 'mongoose';
import { QuestionSchema, AnswerSchema } from '../models/crmModel';

const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);

// Adding a new Question
export const addNewQuestion = (req, res) => {
    let newQuestion = new Question(req.body);

    newQuestion.save((err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}
// Get all Questions
export const getQuestions = (req, res) => {
    Question.find({}, (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}
// Find specific Question by ID
export const getQuestionByID = (req, res) => {
    Question.findById(req.params.questionID, (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}
// Updating Question
export const updateQuestion = (req, res) => {
    // sending id as key from request
    Question.findOneAndUpdate({ _id: req.params.questionID}, req.body, 
        { new: true, // tell mongoose to return the updated object. False = old object
        useFindAndModify: false }, // avoid deprecated data
        (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}
// Deleting Question
export const deleteQuestion = (req, res) => {
    Question.remove({ _id: req.params.questionID}, (err, question) => {
        if (err) {
            res.send(err);
        }
        // response is a key/value as message and message-text
        res.json({ message: 'Question deleted' });
    })
}
// Method to get Answers to a specific question - NOT WORKING
export const getAnswers = (req, res) => {
    Answer.find({}, (err, answer) => {
        if (err) {
            res.send(err);
        }
        res.json(answer);
    })
}
// Adding Answers to the database
export const addNewAnswer = (req, res) => {
    let newAnswer = new Answer(req.body);

    newAnswer.save((err, answer) => {
        if (err) {
            res.send(err);
        }
        res.json(answer);
    })
}