import { gql } from "apollo-server-micro";
import { Note } from "@models/note";

export const typeDefs = gql`
  type Query {
    allNotes(user: String!): [Note]!
    note(id: String!): Note
  }

  type Mutation {
    createNote(id: String!): Note!
    updateNote(id: String!, text: String!): Boolean
    deleteNote(id: String!): Boolean,
  }

  type Note {
    id: string;
    writer: string;
    text: string;
  }
`;

// export interface ResolverTyping {
//   Query: {
//     allNotes(user: string): Note[];
//     note(id: string): Note;
//   };
//   Mutation: {
//     createNote(): Note;
//     updateNote(id: string, text: string): boolean;
//     deleteNote(id: string): boolean;
//   };
// }
