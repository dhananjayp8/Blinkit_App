const express = require("express");
const app = express();
const indexRouter = require("./routes");

app.use("/", indexRouter);

app.listen(7070, () => {
  console.log("Server started!");
});
