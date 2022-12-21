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

export function getAllTweets() {
  return tweets;
}
