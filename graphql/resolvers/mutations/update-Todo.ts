import { MutationResolvers } from "@/generated";
import { Todomodel } from "@/models";

export const updatedTodo: MutationResolvers["updatedTodo"] = async (
  _: unknown,
  { input }
) => {
  const { _id, taskName, isDone, priority } = input;
  try {
    const Todo = await Todomodel.findOneAndUpdate(
      { _id },
      {
        taskName,
        isDone,
        priority,
        updatedAt: new Date(),
      }
    );

    return Todo;
  } catch (error) {
    throw new Error("Failed to updated todo");
  }
};
