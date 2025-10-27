const express = require('express');
const app = express();
const connectDB = require('./configs/database');
const AccountModel = require('./models/account.model');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

//cho phép client gửi body json lên server
app.use(express.json());

connectDB();

//create read update delete
app.post('/api/accounts', async (req, res) => {
  const body = req.body;

  const account = await AccountModel.create(body);

  return res.status(201).json(account);
});

app.get('/api/accounts', async (req, res) => {
  const { username, full_name, phone_number } = req.query;

  const bodyQuery = {};

  if (username) {
    bodyQuery.username = {
      $regex: `.*${username}.*`,
      $options: 'i',
    };
  }

  if (full_name) {
    bodyQuery.full_name = full_name;
  }

  if (phone_number) {
    bodyQuery.phone_number = phone_number;
  }

  const accounts = await AccountModel.find(bodyQuery);

  return res.status(200).json(accounts);
});

app.patch('/api/accounts/:id', async (req, res) => {
  const id = req.params.id;
  //const {id} = req.params;
  const body = req.body;

  const account = await AccountModel.findByIdAndUpdate(id, body, { new: true });

  return res.status(200).json(account);
});

app.patch('/api/accounts/update-all', async (req, res) => {
  await AccountModel.updateMany({ role: 'admin' }, { role: 'user' });

  return res.status(200).json({
    statusCode: 200,
    message: 'update ok',
  });
});

app.delete('/api/accounts/:id', async (req, res) => {
  const { id } = req.params;

  const account = await AccountModel.findByIdAndDelete(id);

  return res.status(200).json(account);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

//format code
