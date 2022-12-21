import express from "express";

const router = express.Router();

let tweets = [
  {
    id: "1",
    name: "john dave",
    username: "JJ",
    createdAt: Date.now().toString(),
    text: "서버 연습용 데이터입니다",
    url: null,
  },
  {
    id: "2",
    name: "scarret",
    username: "SEXY",
    createdAt: Date.now().toString(),
    text: "두번째 서버 연습용 데이터",
    url: null,
  },
];

// 1. get /tweets
// 2. get /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// 3. get /tweers:id <- 이게 내 트윗가져오는건가?
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id:${id} not found` });
  }
});

// 4. post /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    text,
    name,
    username,
    id: Date.now().toString(),
    createdAt: new Date(),
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

// 5. put /tweets/:id
router.put("/:id", (req, res, next) => {
  console.log("실행 체크");
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(202).json(tweet);
  } else {
    res.status(404).send("없는 아이디 입니다");
  }
});

// 6. delete /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});

export default router;
