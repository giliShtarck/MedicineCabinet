
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
var cors = require("cors");

app.use(cors());

const userRoute = require("./route/user");
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/easycart";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/user", userRoute);


app.use((req, res, next) => { next() })



mongoose.connect(
  MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    ConnectFlag = true;
    console.log("Connected to MongoDB");
  }
);

process.on("uncaughtException", function (err) {
  console.error("Caught exception: " + err);
  throw err;
});

// Bellow MongoDB and Above Listen Sever
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./build", "index.html"));
//   });
// }

app.listen(PORT, () => {
  console.error("Server is running on port", PORT);
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});