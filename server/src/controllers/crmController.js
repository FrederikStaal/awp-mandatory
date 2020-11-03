import mongoose from 'mongoose';
import { QuestionSchema } from '../models/crmModel';

const Question = mongoose.model('Question', QuestionSchema);

export const addNewQuestion = (req, res) => {
    let newQuestion = new Question(req.body);

    newQuestion.save((err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}

export const getQuestions = (req, res) => {
    Question.find({}, (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}

export const getQuestionByID = (req, res) => {
    Question.findById(req.params.questionID, (err, question) => {
        if (err) {
            res.send(err);
        }
        res.json(question);
    })
}

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

export const deleteQuestion = (req, res) => {
    Question.remove({ _id: req.params.questionID}, (err, question) => {
        if (err) {
            res.send(err);
        }
        // response is a key/value as message and message-text
        res.json({ message: 'Question deleted' });
    })
}