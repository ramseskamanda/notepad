import { Note, NoteModel } from "@models/note";

type NoteDoc = Note & { _id: string };
export const resolvers = {
  Query: {
    allNotes,
    note,
  },
  Mutation: {
    createNote,
    updateNote,
    deleteNote,
  },
};

async function allNotes(user: string): Promise<NoteDoc[]> {
  const res = await NoteModel.find({ writerId: user });
  return;
}

function note(id: string): Note | undefined {
  return undefined;
}

function createNote(id: string): NoteDoc {
  return { _id: "", writer: id, text: "" };
}

function updateNote(id: string, text: string): boolean {
  return false;
}

function deleteNote(id: string): boolean {
  return false;
}
