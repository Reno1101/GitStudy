const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./display");


app.use(express.static("./public"));


app.get('/home', (req, res) => {
  res.render("home.ejs")
});


const axios = require('axios');

app.get('/product', async (req, res) => {
  try {
    // Lấy dữ liệu từ API (ví dụ như database tạm thời)
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');

    // Render view và truyền dữ liệu
    res.render("product.ejs", { products: result.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi khi lấy dữ liệu sản phẩm');
  }
});



app.listen(5000, () => {
  console.log("server is running on port 50000");
});
    

