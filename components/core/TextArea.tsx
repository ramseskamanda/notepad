import { CurrentNoteAtom } from "@atoms/notes";
import { useAtom } from "jotai";

const textAreaClass =
  "resize-none w-full h-full outline-none p-4 dark:bg-black dark:text-white transition ease duration-150";
export const TextArea: React.FC = () => {
  const [note, setNote] = useAtom(CurrentNoteAtom);

  return (
    <textarea
      key={note._id}
      className={textAreaClass}
      onChange={(e) => setNote({ ...note, text: e.target.value, saved: false })}
      defaultValue={note.text}
    />
  );
};
