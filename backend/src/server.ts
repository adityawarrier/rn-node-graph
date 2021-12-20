import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.listen(1337, () => {
  console.log("Up and Running!");
});
