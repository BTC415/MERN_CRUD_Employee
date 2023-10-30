const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
dotenv.config();
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});