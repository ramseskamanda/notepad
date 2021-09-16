import mongoose from "mongoose";

export interface Note {
  writer: string;
  text: string;
}

const noteSchema = new mongoose.Schema<Note>({
  writer: String,
  text: String,
});

export const NoteModel = mongoose.model<Note>("Note", noteSchema);
