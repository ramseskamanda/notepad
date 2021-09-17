import { NextPage } from "next";
import { useAtom } from "jotai";
import useBreakpoint from "use-breakpoint";
import { NoteModel } from "@models";
import { SelectedNoteAtom } from "@atoms";
import { BREAKPOINTS } from "@components/utils";
import { Save, NoteList, TextArea } from "@components";
import { ensureMongoInit, arrayToRecord } from "@utils";

const wrapper = "w-full h-full";
const center = "grid place-items-center";
const textClasses = "text-black dark:text-white";
const Home: NextPage = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");
  const [selected] = useAtom(SelectedNoteAtom);

  if (selected)
    return (
      <>
        <TextArea />
        <Save />
      </>
    );

  return (
    <div className={wrapper + ("mobile" === breakpoint ? "" : " " + center)}>
      {"mobile" === breakpoint ? <NoteList /> : <h1 className={textClasses}>No note selected.</h1>}
    </div>
  );
};

export async function getServerSideProps() {
  const initialized = await ensureMongoInit();
  const notes = !initialized ? [] : await NoteModel.find({});
  return { props: { initialState: arrayToRecord(notes) } };
}

export default Home;
