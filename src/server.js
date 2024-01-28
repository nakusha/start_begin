import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const handleRoot = (req, res) => {
  console.log("req end");
  return res.send("i still love you");
};
const handleLogin = (req, res) => {
  return res.send("login page");
};
const handleProtected = (req, res) => {
  return res.send("Protected page");
};

// 모든 것에 적용
app.use(logger);
app.get("/", handleRoot);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => {
  console.log("Server listening on port 4000");
};
app.listen(4000, handleListening);
