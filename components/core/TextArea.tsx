import { useAtom } from "jotai";
import { ChangeEventHandler } from "react";
import { NotesAtom, notesReducer, SelectedNoteAtom } from "@atoms";

const textAreaClass =
  "resize-none w-full h-full outline-none p-4 dark:bg-black dark:text-white transition ease duration-150";
export const TextArea: React.FC = () => {
  const [notes, setNotes] = useAtom(NotesAtom);
  const [selected] = useAtom(SelectedNoteAtom);
  const note = notes[selected];

  const updateNote: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();
    const updated = { ...note, text: e.target.value, saved: false };
    setNotes((state) => notesReducer(state, "update", updated));
  };

  return <textarea key={note._id} className={textAreaClass} onChange={updateNote} defaultValue={note.text} />;
};
