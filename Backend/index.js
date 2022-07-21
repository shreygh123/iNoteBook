const connectMongo = require("./db");
const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const path= require('path');
connectMongo();
var app = express()
const port = process.env.port || 5000;

dotenv.config();
// const app = express();
app.use(cors())
app.use(express.json()) // to accept json data

// Available Routes
app.use('/api/notes', require('./Router/notes'))
app.use('/api/auth', require('./Router/auth'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})

// // --------------------------deployment------------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,'..', "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname,'..', "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// // --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`iNotebook backend listening on port ${PORT}`))