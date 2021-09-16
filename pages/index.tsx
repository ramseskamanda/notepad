import { NextPage } from "next";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@components/utils";
import { NoteList } from "@components/NoteList";
import { Note, NoteModel } from "@models/note";
import React from "react";
import { Save } from "@components/Save";
import { useAtom } from "jotai";
import { SelectedNoteAtom } from "@atoms/notes";
import { TextArea } from "@components/core/TextArea";

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
  const notes = await NoteModel.find();
  const initialState: Record<string, Note> = {};
  notes.forEach((note) => (initialState[note._id] = { _id: note._id, text: note.text, saved: true }));
  return { props: { initialState } };
}

export default Home;
