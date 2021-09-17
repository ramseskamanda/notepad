import { Note } from "@models";

export const arrayToRecord = (array: Note[]): Record<string, Note> => {
  return array.reduce((rec, { _id, text }) => ({ ...rec, [_id]: { _id, text, saved: true } }), {});
};
