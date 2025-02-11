const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
//import env config file and configure it;
const dotenv = require("dotenv");
dotenv.config();

const log = require("./routes/login");
const notes = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to database';
mongoose.connect(
  "mongodb+srv://louis_0:grjujcp1g4jcu7oe@cluster0.isjfs.mongodb.net/noted?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("connection to database initalized"));

app.use("/", log);
app.use("/notes", notes);

app.listen(8080, () => {
  console.log("app is running on port ", 8080);
});
