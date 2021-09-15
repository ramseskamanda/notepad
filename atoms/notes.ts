import { Note } from "@models/note";
import { atom } from "jotai";

export const NotesAtom = atom<Note[]>([]);
