import { useAtom } from "jotai";
import { useState } from "react";
import { poster } from "@utils";
import { Button } from "@components";
import { NotesAtom, notesReducer, SelectedNoteAtom } from "@atoms";

const wrapperClasses = "absolute bottom-4 right-4 text-base text-blue-500";
export const Save: React.FC = () => {
  const [selected] = useAtom(SelectedNoteAtom);
  const [notes, setNotes] = useAtom(NotesAtom);
  const [error, setError] = useState<boolean>(false);
  const current = notes[selected];

  const saveNote = async () => {
    try {
      await poster(`/api/notes/${current._id}`, current.text);
      const updated = { ...current, saved: true };
      setNotes((state) => notesReducer(state, "update", updated));
      setError(false);
    } catch {
      //there's better ways than this to handle errors
      setError(true);
    }
  };

  return (
    <div className={wrapperClasses}>
      <Button text={error ? "Retry" : "Save"} onClick={saveNote} />
    </div>
  );
};
