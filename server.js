const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./routes/weather");

const server = express();
server.use(cors());
server.use(express.json());

server.use("/weather", weatherRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
