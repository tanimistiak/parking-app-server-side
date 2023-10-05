const express = require("express");
const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routes/api/v1/users.route");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const baseRouter = require("./routes/api/v1/base.route");
const parkingRouter = require("./routes/parking.route");
const publicUsersRouter = require("./routes/api/v1/publicUsers.route");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;
app.use(
  cors({
    credentials: true,
    origin: "https://parking-app-client-side.onrender.com",
  })
);
app.use(express.json());

app.use(cookieParser());

dbConnect();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/parking", parkingRouter);
app.use("/api/v1/publicUsers", publicUsersRouter);
app.use("/", baseRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server started on`, PORT);
});

module.exports = app;
