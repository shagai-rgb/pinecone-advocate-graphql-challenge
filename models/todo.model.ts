import { Schema, model, models } from "mongoose";

export type Todo = {
  _id: string;
  taskName: string;
  isDone: Boolean;
  priority: Number;
  createdAt: Date;
  updatedAt: Date;
};

const Todoschema = new Schema<Todo>({
  taskName: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export const Todomodel = models.Todo || model<Todo>("Todo", Todoschema);
