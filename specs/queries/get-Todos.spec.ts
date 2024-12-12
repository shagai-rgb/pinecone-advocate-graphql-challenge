import { getTodos } from "@/graphql/resolvers/queries/get-Todos";
import { Todomodel } from "@/models";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../models/todo.model", () => ({
  Todomodel: {
    find: jest
      .fn()
      .mockResolvedValueOnce([
        {
          _id: "1",
          taskName: "test",
          isDone: false,
          priority: 2,
          createdAt: expect.any(Date),
        },
      ])
      .mockRejectedValueOnce({}),
  },
}));

describe("get all todos", () => {
  it("should return todos successfully", async () => {
    const result = await getTodos!({}, {}, {}, {} as GraphQLResolveInfo);
    expect(result).toEqual([
      {
        _id: "1",
        taskName: "test",
        isDone: false,
        priority: 2,
        createdAt: expect.any(Date),
      },
    ]);
  });
  it("should throw an error if fetching todos fails", async () => {
    try {
      await getTodos!({}, {}, {}, {} as GraphQLResolveInfo);
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch todo"));
    }
  });
});
