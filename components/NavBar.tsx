import { useAtom } from "jotai";
import { useTheme } from "@hooks";
import { v4 as uuid } from "uuid";
import { Button } from "@components";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS, If } from "@components/utils";
import { ChevronLeft, Moon, Plus, Sun } from "react-feather";
import { NotesAtom, SelectedNoteAtom } from "@atoms";

interface NavBarProps {
  title?: string;
}

const navClasses = "w-full flex justify-start px-4 py-2 border-b-2 dark:text-white";
const titleClasses = "w-full grid place-items-center";
export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const [theme, toggleTheme] = useTheme();
  const [, setNotes] = useAtom(NotesAtom);

  const createNew = () => setNotes(["add", { _id: uuid(), text: "This is a new note!", saved: false }]);

  return (
    <nav className={navClasses}>
      <BackButton />
      <Button icon text={<Plus size={20} />} onClick={createNew} />
      <h1 className={titleClasses}>{title ?? "My awesome Notepad"}</h1>
      <Button icon text={theme === "light" ? <Sun /> : <Moon />} onClick={toggleTheme} />
    </nav>
  );
};

const BackButton: React.FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const [selected, setSelected] = useAtom(SelectedNoteAtom);
  return (
    <If condition={breakpoint === "mobile" && !!selected}>
      <Button icon text={<ChevronLeft size={20} />} onClick={() => setSelected("")} />
    </If>
  );
};
