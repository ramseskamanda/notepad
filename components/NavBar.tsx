import { useAtom } from "jotai";
import { useTheme } from "@hooks";
import { v4 as uuid } from "uuid";
import { Button } from "@components";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS, If } from "@components/utils";
import { ChevronLeft, Moon, Plus, Sun } from "react-feather";
import { NotesAtom, notesReducer, SelectedNoteAtom } from "@atoms";

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

  const createNew = () => {
    const note = { _id: uuid(), text: "This is a new note!", saved: false };
    setNotes((state) => notesReducer(state, "add", note));
    setSelected(note._id);
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
