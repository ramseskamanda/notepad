import { For } from "./utils";
import Link from "next/link";
import { Note } from "@models/note";

const _notes: Note[] = [
  {
    writerId: "1",
    docId: "1",
    text:
      "Hello world aoisdnfaoisdnfaoidsfnaosdifnaosidfnaoidsfnaosidfnasoidfnaosidnfaosidnfaoisdnfaosidfnaoidfnasodfinasdoifnason",
  },
  { writerId: "1", docId: "2", text: "Hello world" },
  { writerId: "1", docId: "3", text: "Hello world" },
  { writerId: "1", docId: "4", text: "Hello world" },
  { writerId: "1", docId: "5", text: "Hello world" },
];

interface NoteList {
  notes?: Note[];
}

const noteDivClasses =
  "p-4 cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900 transition ease duration-300";
const pClasses = "w-5/6 truncate";
export const NoteList: React.FC<NoteList> = ({ notes = _notes }) => {
  return (
    <For
      fadeIn
      each={notes}
      render={(note) => (
        <Link key={note.docId} href={`/${note.docId}`}>
          <div className={noteDivClasses}>
            <p className={pClasses}>{note.text}</p>
          </div>
        </Link>
      )}
    />
  );
};
