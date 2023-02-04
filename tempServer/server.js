const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 4000;
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.static('public'));

const dataRaw = fs.readFileSync('./datas.json', 'utf-8');
const data = JSON.parse(dataRaw);
const tempUser = { id: 'test1234', password: 'test1234' };

// 필요한 임시 API 추가
app.post('/signup', (req, res) => {
  res.json({ message: 'success' });
});

app.post('/login', (req, res, next) => {
  const { id, password } = req.body;
  if (id !== tempUser.id || password !== tempUser.password) {
    res.status(401).send();
  }
  res.json({
    message: 'success',
    accessToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJleGFtcGxlQGdtYWlsLmNvbSIsImlhdCI6MTY3NDMyODMzOCwiZXhwIjoxNjc0MzMwMTM4LCJpZCI6ImFzZGYiLCJuaWNrbmFtZSI6ImJvdXJib24iLCJyb2xlIjoiUk9MRV9VU0VSIn0.ePPbCBVHWmNzFPBXnN35r6RqzlU1JtCBxjCxzGnssHA',
  });
});

app.get('/board/list', (req, res) => {
  res.status(200).json({
    board_data: [
      {
        id: 1,
        member_id: 'qweqwe111',
        nickname: '우주하마',
        title: '내가 가본 관광지 TOP 5',
        indate: '2023-01-20 12:22:33',
        thumb: 2,
        comment_cnt: 3,
      },
      {
        id: 2,
        member_id: 'asdasd123',
        nickname: '여행좋아',
        title: '요즘 날씨에 가기 딱 좋은곳!',
        indate: '2023-01-21 11:32:13',
        thumb: 3,
        comment_cnt: 10,
      },
      {
        id: 3,
        member_id: 'asdasd123',
        nickname: '아이아빠',
        title: '주말에 아이들과 나들이를 가려는데, 서울 근교 추천해주세요.',
        indate: '2023-01-21 11:32:13',
        thumb: 10,
        comment_cnt: 13,
      },
      {
        id: 4,
        member_id: 'asdasd123',
        nickname: '차박차박',
        title: '다들 차박 자주 가시나요? 준비물좀 알려주세요.',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 5,
        member_id: 'asdasd123',
        nickname: '효녀',
        title: '엄마랑 같이 여행다녀왔어요. ^^',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
      {
        id: 6,
        member_id: 'asdasd123',
        nickname: '운영자일수도',
        title: '경기도에 맛집 추천좀요',
        indate: '2023-01-21 11:32:13',
        thumb: 0,
        comment_cnt: 2,
      },
    ],
  });
});

// let orderHistory = [];

// app.post('/order', (req, res) => {
//   const orderNumber = Math.floor(Math.random() * 1000000);
//   let order = { price: req.body.totals.total, orderNumber };
//   orderHistory.push(order);
//   res.status(201).json(orderHistory);
// });

if (require.main === module) {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = app;
