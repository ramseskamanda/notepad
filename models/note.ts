import mongoose from "mongoose";

export interface Note {
  _id: string;
  text: string;
  saved?: boolean;
}

const noteSchema = new mongoose.Schema<Note>({
  _id: { type: String, required: true },
  text: { type: String, required: true },
});

export const NoteModel = mongoose.models.Note || mongoose.model<Note>("Note", noteSchema);
