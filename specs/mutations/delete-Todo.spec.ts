import { deleteTodo } from "@/graphql/resolvers/mutations/delete-Todo";
import { Todomodel } from "@/models";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/todo.model", () => ({
  Todomodel: {
    findByIdAndDelete: jest
      .fn()
      .mockReturnValueOnce({
        _id: "1",
        taskName: "test",
        isDone: false,
        priority: 2,
        createdAt: expect.any(Date),
      })
      .mockRejectedValueOnce({}),
  },
}));

describe("Delete Todo", () => {
  it("should delete todo", async () => {
    const result = await deleteTodo!(
      {},
      { _id: "1" },
      {},
      {} as GraphQLResolveInfo
    );
    expect(result).toEqual({
      _id: "1",
      taskName: "test",
      isDone: false,
      priority: 2,
      createdAt: expect.any(Date),
    });
  });
  it("Failed to deleted todo", async () => {
    try {
      await deleteTodo!({}, { _id: "1" }, {}, {} as GraphQLResolveInfo);
    } catch (error) {
      expect(error).toEqual(new Error("Failed to deleted todo"));
    }
  });
});
