import express from "express";
const app = express();

app.post("/signup", (req, res) => {
  res.send("signup");
});

app.post("/signin", (req, res) => {
  res.send("signin");
});

app.post("/getChat", (req, res) => {
  res.send("getChat");
});

app.listen(3001);
