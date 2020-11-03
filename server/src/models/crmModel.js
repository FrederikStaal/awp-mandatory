import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuestionSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    text: {
        type: String,
        required: 'Enter a text'
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

export const AnswerSchema = new Schema({
    answer: {
        type: String,
        required: 'Enter an answer'
    },
    questionID: {
        type: String
    }
});