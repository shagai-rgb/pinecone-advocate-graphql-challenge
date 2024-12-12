import { QueryResolvers } from "@/generated";
import { Todomodel } from "@/models";

export const getTodos: QueryResolvers["getTodos"] = async () => {
  try {
    const Todo = await Todomodel.find({});
    return Todo;
  } catch (error) {
    throw new Error("Failed to fetch todo");
  }
};
