const express = require("express");
const dbConnect = require("./utils/dbConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const baseRouter = require("./routes/api/v1/base.route");
const parkingRouter = require("./routes/parking.route");


const bookingRouter = require("./routes/api/booking.route");
const ownerRouter = require("./routes/api/v1/owner.route");
const userRouter = require("./routes/api/v1/user.route");

const app = express();
const PORT = 8080;
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use(cookieParser());

app.use(express.static("public"));

dbConnect();

app.use("/api/v1/owner", ownerRouter);
app.use("/api/v1/parking", parkingRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/booking", bookingRouter);
app.use("/", baseRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`Server started on`, PORT);
});

module.exports = app;
