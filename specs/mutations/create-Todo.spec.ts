import { createTodo } from "@/graphql/resolvers/mutations/create-Todo";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/todo.model", () => ({
  Todomodel: {
    create: jest
      .fn()
      .mockReturnValueOnce({
        _id: "1",
        taskName: "test",
        isDone: false,
        priority: 2,
        createdAt: new Date(),
      })
      .mockRejectedValueOnce({}),
  },
}));
describe("Create Todo", () => {
  it("should create todo", async () => {
    const result = await createTodo!(
      {},
      { input: { taskName: "test", isDone: false, priority: 2 } },
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
  it("Failed to create todo", async () => {
    try {
      await createTodo!(
        {},
        { input: { taskName: "test", isDone: false, priority: 2 } },
        {},
        {} as GraphQLResolveInfo
      );
    } catch (error) {
      expect(error).toEqual(new Error("Failed to create todo"));
    }
  });
});
