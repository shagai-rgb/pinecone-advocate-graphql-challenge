import { Todomodel } from "../../../models/todo.model";
import { MutationResolvers } from "@/generated";

export const createTodo: MutationResolvers["createTodo"] = async (
  _: unknown,
  { input }
) => {
  const { taskName, isDone, priority } = input;

  try {
    const Todo = await Todomodel.create({
      taskName,
      isDone,
      priority,
      createdAt: new Date(),
    });
    return Todo;
  } catch (error) {
    throw new Error("Failed to create todo");
  }
};
