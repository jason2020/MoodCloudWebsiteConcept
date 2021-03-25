const morgan = require("morgan");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact",(req, res) => {
    console.log(req.body);
});

http.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});