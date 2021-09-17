import { Note } from "@models";
import { atom } from "jotai";

export type Action = "add" | "update" | "delete";
export const NotesAtom = atom<Record<string, Note>>({});
export const SelectedNoteAtom = atom<string>("");
export const notesReducer = (state: Record<string, Note>, action: Action, note: Note): Record<string, Note> => {
  switch (action) {
    case "add":
    case "update":
      return { ...state, [note._id]: note };
    case "delete":
      const clone = Object.assign({}, state);
      delete clone[note._id];
      return clone;
  }
};
/*
NOTE: below is a much cleaner implementation but it encounters a bug with jotai
in which the state is not found and therefore never updated
*/
// export const NotesAtom = atom<null, [Action, Note]>(null, (get, set, [action, note]) => {
//   switch (action) {
//     case "add":
//       set(Notes, (state) => ({ [note._id]: note, ...state });
//       set(SelectedNoteAtom, note._id);
//     case "update":
//       const selected = get(SelectedNoteAtom);
//       set(Notes, (state) => ({ ...state, [selected]: note }));
//     case "delete":
//       if (selected === note._id) set(SelectedNoteAtom, "");
//       set(Notes, (state) => {
//         const clone = Object.assign({}, state);
//         delete clone[note._id];
//         return clone;
//       });
//   }
// });
