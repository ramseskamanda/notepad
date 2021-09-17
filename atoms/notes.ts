import { WritableAtom, atom } from "jotai";
import { Note } from "@models";

export const SelectedNoteAtom: WritableAtom<string, string> = atom<string>("");
export const Notes = atom<Record<string, Note>>({});

export const CurrentNoteAtom = atom<Note, Partial<Note>>(
  (get) => get(Notes)[get(SelectedNoteAtom)],
  (get, set, note) => set(NotesAtom, ["update", { ...get(Notes)[get(SelectedNoteAtom)], ...note }])
);

export type Action = "add" | "update" | "delete";
export const NotesAtom = atom<null, [Action, Note]>(null, (get, set, [action, note]) => {
  switch (action) {
    case "add":
      set(Notes, (state) => ({ [note._id]: note, ...state }));
      return set(SelectedNoteAtom, note._id);
    case "update":
      return set(Notes, (state) => ({ ...state, [get(SelectedNoteAtom)]: note }));
    case "delete":
      if (get(SelectedNoteAtom) === note._id) set(SelectedNoteAtom, "");
      return set(Notes, (state) => {
        const clone = Object.assign({}, state);
        delete clone[note._id];
        return clone;
      });
  }
});
