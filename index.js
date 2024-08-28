// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
  credentials: true, // Allow credentials if needed
};

// Use CORS middleware with options
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
