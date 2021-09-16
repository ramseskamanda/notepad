import { For, If } from "./utils";
import { useAtom } from "jotai";
import { NotesAtom, SelectedNoteAtom } from "@atoms/notes";
import { CloudOff, X } from "react-feather";
import { Button } from "./core/Button";
import { Note } from "@models/note";
import { deleter } from "utils/axios";

export const NoteList: React.FC = () => {
  const [notes] = useAtom(NotesAtom);

  return (
    <For fadeIn each={Object.values(notes ?? {})} render={(note) => <NoteListTile key={note._id} note={note} />} />
  );
};

interface NoteListTileProps {
  note: Note;
}

const wrapper =
  "group h-16 flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800 transition ease duration-300";
const p = "w-full px-2 truncate";
const icon = "mx-2 text-gray-400";
const active = "bg-gray-50 dark:bg-gray-800";
const button = "px-2 invisible group-hover:visible";
const NoteListTile: React.FC<NoteListTileProps> = ({ note }) => {
  const [selected, setSelected] = useAtom(SelectedNoteAtom);
  const [, setNotes] = useAtom(NotesAtom);

  const selectNote = async () => setSelected(note._id);

  const deleteNote = async () => {
    try {
      await deleter(`/api/notes/${note._id}`);
      if (selected === note._id) setSelected("");
      setNotes((state) => {
        if (state[note._id]) {
          delete state[note._id];
          return { ...state };
        }
        return state;
      });
    } catch {
      console.log("failed to delete");
    }
  };

  const wrapperClass = wrapper + (selected === note._id ? " " + active : "");
  return (
    <div className={wrapperClass} onClick={selectNote}>
      <If condition={note.saved !== undefined && !note.saved}>
        <CloudOff size={16} className={icon} />
      </If>
      <p className={p}>{note.text}</p>
      <div className={button}>
        <Button icon text={<X size={14} />} onClick={deleteNote} />
      </div>
    </div>
  );
};
