import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.router.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
//22.12.15 cors, helmet, morgan이 정확히 무슨일을 하고, 중요한 옵션은 뭐가있는지 더 알아봐야함

app.use("/tweets", tweetsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).send("페이지를 찾는데 실패함");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080);
