import { QueryResolvers } from "@/generated";
import { Todomodel } from "@/models";

export const getdoneTodos: QueryResolvers["getdoneTodos"] = async () => {
  try {
    const Todo = await Todomodel.find({});

    const doneTodos = Todo.filter((el) => el.isDone == true);
    return doneTodos;
  } catch (error) {
    throw new Error("Failed to fetch todo");
  }
};
