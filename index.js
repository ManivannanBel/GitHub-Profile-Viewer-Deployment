const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.setHeader("");
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
