import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Todo {
    _id: ID!
    taskName: String!
    isDone: Boolean!
    priority: Int!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getdoneTodos: [Todo!]
    getTodos: [Todo!]!
  }

  input CreateTodoInputs {
    taskName: String!
    isDone: Boolean!
    priority: Int!
  }

  input UpdateTodoInputs {
    _id: ID!
    taskName: String!
    isDone: Boolean!
    priority: Int!
  }

  type Mutation {
    createTodo(input: CreateTodoInputs!): Todo!
    updatedTodo(input: UpdateTodoInputs!): Todo!
    deleteTodo(_id: ID!): Todo!
  }
`;
