import { ChevronLeft, Moon, Plus, Sun } from "react-feather";
import { Button } from "./core/Button";
import { useTheme } from "@hooks/useTheme";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS, If } from "./utils";
import { v4 as uuid } from "uuid";
import { useAtom } from "jotai";
import { NotesAtom, SelectedNoteAtom } from "@atoms/notes";
import { Note } from "@models/note";

interface NavBarProps {
  title?: string;
}

const navClasses = "w-full flex justify-start px-4 py-2 border-b-2 dark:text-white";
const titleClasses = "w-full grid place-items-center";
export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const [theme, toggleTheme] = useTheme();
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const [, setNotes] = useAtom(NotesAtom);
  const [selected, setSelected] = useAtom(SelectedNoteAtom);

  //FIXME: somehow this breaks when you delete an item then add a new one
  const createNew = () => {
    const _id = uuid();
    const newNote: Note = { _id, text: "This is a new note!", saved: false };
    setNotes((state) => ({ [_id]: newNote, ...state }));
    setSelected(_id);
  };

  return (
    <nav className={navClasses}>
      <If condition={breakpoint === "mobile" && !!selected}>
        <Button icon text={<ChevronLeft size={20} />} onClick={() => setSelected("")} />
      </If>
      <Button icon text={<Plus size={20} />} onClick={createNew} />
      <h1 className={titleClasses}>{title ?? "My awesome Notepad"}</h1>
      <Button icon text={theme === "light" ? <Sun /> : <Moon />} onClick={toggleTheme} />
    </nav>
  );
};
