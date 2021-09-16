import { Note } from "@models/note";
import { atom } from "jotai";

export const NotesAtom = atom<Record<string, Note>>({});
export const SelectedNoteAtom = atom<string>("");
export const CurrentNoteAtom = atom<Note, Note>(
  (get) => {
    const notes = get(NotesAtom);
    const selected = get(SelectedNoteAtom);
    console.log(selected);
    return notes[selected];
  },
  (get, set, note) => {
    const notes = get(NotesAtom);
    const selected = get(SelectedNoteAtom);
    return set(NotesAtom, { ...notes, [selected]: note });
  }
);
