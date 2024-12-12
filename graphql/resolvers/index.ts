import { createTodo } from "./mutations/create-Todo";
import { deleteTodo } from "./mutations/delete-Todo";
import { sayHello } from "./mutations/say-hello";
import { updatedTodo } from "./mutations/update-Todo";
import { getdoneTodos } from "./queries/get-done-Todos";
import { getTodos } from "./queries/get-Todos";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
    getTodos,
    getdoneTodos,
  },
  Mutation: {
    createTodo,
    sayHello,
    updatedTodo,
    deleteTodo,
  },
};
