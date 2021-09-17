import { AsyncState } from "@models";
import { atom } from "jotai";

export const SaveAtom = atom<AsyncState>("idle");
