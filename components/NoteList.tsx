import { useAtom } from "jotai";
import { AsyncState, Note } from "@models";
import { deleter } from "@utils";
import { Button } from "@components";
import { For, If } from "@components/utils";
import { Check, CloudOff, RefreshCcw, X, XCircle } from "react-feather";
import { Notes, NotesAtom, SaveAtom, SelectedNoteAtom } from "@atoms";
import React, { Fragment } from "react";

export const NoteList: React.FC = () => {
  const [notes] = useAtom(Notes);

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
const active = "bg-gray-50 dark:bg-gray-800";
const NoteListTile: React.FC<NoteListTileProps> = ({ note }) => {
  const [selected, setSelected] = useAtom(SelectedNoteAtom);

  const selectNote = async () => setSelected(note._id);

  return (
    <div className={wrapper + (selected === note._id ? " " + active : "")} onClick={selectNote}>
      <SaveIndicator saved={note.saved} />
      <p className={p}>{note.text}</p>
      <DeleteButton {...note} />
    </div>
  );
};

const icon = "mx-2 text-gray-400";
const saveStateToIndicatorMapping: Record<AsyncState, React.ReactElement> = {
  idle: null,
  success: <Check size={16} color="#6ae59b" className={icon} />,
  working: <RefreshCcw size={16} className={icon} />,
  error: <XCircle size={16} color="red" className={icon} />,
};

const SaveIndicator: React.FC<Partial<Note>> = ({ saved }) => {
  const [state] = useAtom(SaveAtom);

  if (!saved && state === "idle") return <CloudOff size={16} className={icon} />;

  return saveStateToIndicatorMapping[state];
};

const button = "mx-2 invisible group-hover:visible";
const DeleteButton: React.FC<Note> = (note) => {
  const [, setNotes] = useAtom(NotesAtom);

  const deleteNote = async () => {
    try {
      await deleter(`/api/notes/${note._id}`);
      setNotes(["delete", note]);
    } catch {
      console.error("failed to delete");
    }
  };

  return (
    <div className={button}>
      <Button icon text={<X size={14} />} onClick={deleteNote} />
    </div>
  );
};
