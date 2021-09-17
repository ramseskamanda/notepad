import { useAtom } from "jotai";
import React, { useState } from "react";
import { poster } from "@utils";
import { Button } from "@components";
import { CurrentNoteAtom, SaveAtom } from "@atoms";
import { AsyncState } from "@models";

const stateTextMapping: Record<AsyncState, React.ReactNode> = {
  idle: "Save",
  working: "Saving...",
  success: "Saved!",
  error: "Failed. Retry?",
};

const wrapper = "absolute bottom-4 right-4 text-base text-blue-500";
export const Save: React.FC = () => {
  const [current, updateCurrent] = useAtom(CurrentNoteAtom);
  const [state, setState] = useAtom(SaveAtom);

  const saveNote = async () => {
    try {
      setState("working");
      await poster(`/api/notes/${current._id}`, current.text);
      updateCurrent({ saved: true });
      setState("success");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("error");
    }
  };

  return (
    <div className={wrapper}>
      <Button text={stateTextMapping[state]} onClick={saveNote} />
    </div>
  );
};
