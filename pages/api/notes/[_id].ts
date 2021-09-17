import { NoteModel } from "@models";
import { NextApiHandler } from "next";
import { ensureMongoInit } from "@utils";

const handler: NextApiHandler = async (req, res) => {
  await ensureMongoInit();
  const {
    method,
    query: { _id },
  } = req;

  switch (method) {
    case "POST":
      const { text } = req.body;
      const exists = await NoteModel.exists({ _id });
      if (exists) {
        await NoteModel.findByIdAndUpdate(_id, { text });
      } else {
        await NoteModel.create({ _id, text });
      }
      return res.status(200).send({});
    case "DELETE":
      await NoteModel.findByIdAndDelete(_id);
      return res.status(200).send({});
    default:
      res.status(401).send({ message: "That's just not allowed:/" });
  }
};

export default handler;
