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
  res.json({ message: 'success' });
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
