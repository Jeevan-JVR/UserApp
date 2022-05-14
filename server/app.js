require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/connect");
const router = require("./router/router");
port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Listening on port ${port}.....`));
  } catch (error) {
    console.error(error);
  }
};

start()