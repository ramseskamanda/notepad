import { CurrentNoteAtom } from "@atoms/notes";
import { useAtom } from "jotai";
import { useState } from "react";
import { poster } from "utils/axios";
import { Button } from "./core/Button";

const wrapperClasses = "absolute bottom-4 right-4 text-base text-blue-500";
export const Save: React.FC = () => {
  const [current, setCurrent] = useAtom(CurrentNoteAtom);
  const [error, setError] = useState<string>("");

  const saveNote = async () => {
    try {
      setError("");
      await poster(`/api/notes/${current._id}`, current.text);
      setCurrent({ ...current, saved: true });
    } catch {
      //this is bad practice but don't have time
      setError("Try again");
    }
  };

  return (
    <div className={wrapperClasses}>
      <Button text="Save" onClick={saveNote} error={error} />
    </div>
  );
};
