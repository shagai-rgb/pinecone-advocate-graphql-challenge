import { MutationResolvers } from "@/generated";
import { Todomodel } from "@/models";

export const deleteTodo: MutationResolvers["deleteTodo"] = async (
  _: unknown,
  { _id }
) => {
  try {
    const Todo = await Todomodel.findByIdAndDelete(_id);
    return Todo;
  } catch (error) {
    throw new Error("Failed to deleted todo");
  }
};
