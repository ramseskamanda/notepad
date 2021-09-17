import { useAtom } from "jotai";
import { ChangeEventHandler } from "react";
import { CurrentNoteAtom } from "@atoms";

const textAreaClass =
  "resize-none w-full h-full outline-none p-4 dark:bg-black dark:text-white transition ease duration-150";
export const TextArea: React.FC = () => {
  const [note, updateNote] = useAtom(CurrentNoteAtom);

  const updateNoteContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault();
    updateNote({ text: e.target.value, saved: false });
  };

  return <textarea key={note._id} className={textAreaClass} onChange={updateNoteContent} defaultValue={note.text} />;
};
