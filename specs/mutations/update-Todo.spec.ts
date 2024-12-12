import { updatedTodo } from "@/graphql/resolvers/mutations/update-Todo";
import { Todomodel } from "@/models";
import exp from "constants";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/todo.model", () => ({
  Todomodel: {
    findOneAndUpdate: jest
      .fn()
      .mockResolvedValueOnce({
        _id: "1",
        taskName: "test",
        isDone: false,
        priority: 1,
        updatedAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Update Todo", () => {
  it("should update a todo", async () => {
    const result = await updatedTodo!(
      {},
      { input: { _id: "1", taskName: "test", isDone: false, priority: 1 } },
      {},
      {} as GraphQLResolveInfo
    );
    expect(result).toEqual({
      _id: "1",
      taskName: "test",
      isDone: false,
      priority: 1,
      updatedAt: expect.any(Date),
    });
  });
  it("failed updated todo", async () => {
    try {
      await updatedTodo!(
        {},
        { input: { _id: "1", taskName: "test", isDone: false, priority: 1 } },
        {},
        {} as GraphQLResolveInfo
      );
    } catch (error) {
      expect(error).toEqual(new Error("Failed to updated todo"));
    }
  });
});
