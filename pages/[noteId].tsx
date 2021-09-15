import { TextArea } from "@components/core/TextArea";
import { Save } from "@components/Save";
import { NextPage } from "next";

const Note: NextPage = () => {
  return (
    <>
      <TextArea text="" onChange={console.log} />
      <Save />
    </>
  );
};

export default Note;
