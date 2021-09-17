import { useAtom } from "jotai";
import { useState } from "react";
import { poster } from "@utils";
import { Button } from "@components";
import { CurrentNoteAtom } from "@atoms";

const wrapperClasses = "absolute bottom-4 right-4 text-base text-blue-500";
export const Save: React.FC = () => {
  const [current, updateCurrent] = useAtom(CurrentNoteAtom);
  const [error, setError] = useState<boolean>(false);

  const saveNote = async () => {
    try {
      await poster(`/api/notes/${current._id}`, current.text);
      updateCurrent({ saved: true });
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
