import { NextPage } from "next";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@components/utils";
import { NoteList } from "@components/NoteList";

const sectionClasses = "w-full h-full grid place-items-center";
const listWrapperClasses = "w-full h-full";
const textClasses = "text-black dark:text-white";
const Home: NextPage = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

  if ("mobile" === breakpoint) {
    return (
      <div className={listWrapperClasses}>
        <NoteList />
      </div>
    );
  }

  return (
    <div className={sectionClasses}>
      <h1 className={textClasses}>No note selected.</h1>
    </div>
  );
};

export default Home;
