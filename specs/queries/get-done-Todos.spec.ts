import { getdoneTodos } from "@/graphql/resolvers/queries/get-done-Todos";
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
          isDone: true,
          priority: 2,
          createdAt: expect.any(Date),
        },
      ])
      .mockRejectedValueOnce({}),
  },
}));

describe("get done Todos", () => {
  it("should fetch done todos successfully", async () => {
    const result = await getdoneTodos!({}, {}, {}, {} as GraphQLResolveInfo);
    expect(result).toEqual([
      {
        _id: "1",
        taskName: "test",
        isDone: true,
        priority: 2,
        createdAt: expect.any(Date),
      },
    ]);
  });
  it("should throw an error if fetching todos fails", async () => {
    try {
      await getdoneTodos!({}, {}, {}, {} as GraphQLResolveInfo);
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch todo"));
    }
  });
});
