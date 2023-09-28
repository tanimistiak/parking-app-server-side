const express = require("express");
const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routes/api/v1/users.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const baseRouter = require("./routes/api/v1/base.route");
const app = express();
const PORT = 8080;
app.use(
  cors({
    credentials: true,
    origin: "https://rad-moonbeam-e18db0.netlify.app",
  })
);
app.use(express.json());
app.use(cookieParser());
dbConnect();

app.use("/api/v1/user", userRouter);
app.use("/", baseRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server started on`, PORT);
});

module.exports = app;
