import { ChevronLeft, Moon, Plus, Sun } from "react-feather";
import { Button } from "./core/Button";
import { useTheme } from "@hooks/useTheme";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS, If } from "./utils";
import { useRouter } from "next/dist/client/router";

interface NavBarProps {
  title?: string;
}

const navClasses = "w-full flex justify-start px-4 py-2 border-b-2 dark:text-white";
const titleClasses = "w-full grid place-items-center";
export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const [theme, toggleTheme] = useTheme();
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");
  const router = useRouter();

  return (
    <nav className={navClasses}>
      <If condition={breakpoint === "mobile" && router.pathname !== "/"}>
        <Button icon text={<ChevronLeft size={20} />} onClick={() => router.replace("/")} />
      </If>
      <Button icon text={<Plus size={20} />} onClick={() => alert("add new note")} />
      <h1 className={titleClasses}>{title ?? "My awesome Notepad"}</h1>
      <Button icon text={theme === "light" ? <Sun /> : <Moon />} onClick={toggleTheme} />
    </nav>
  );
};
