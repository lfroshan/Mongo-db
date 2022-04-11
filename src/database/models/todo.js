const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    estimated_time: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
