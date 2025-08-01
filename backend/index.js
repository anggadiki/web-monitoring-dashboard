const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sitesRouter = require("./routes/sites");
const { startCronJobs } = require("./utils/cleanUp");
require("./pingWorker"); // scheduler jalan otomatis

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/sites", sitesRouter);

startCronJobs();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
