const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./viewsx");


app.use(express.static("./public"));


app.get('/home', (req, res) => {
    res.render("home.ejs")
  });

  app.get('/product', (req, res) => {
    //try van du lieu tu database
    //xu ly du lieu

    const products = [
      { id:1, name: "Product 1", img: "https://thuythithi.com/wp-content/uploads/2023/04/nen-chon-nuoi-meo-ta-hay-meo-tay-2.jpg"},
      { id:2, name: "Product 2", img: "https://thuythithi.com/wp-content/uploads/2023/04/nen-chon-nuoi-meo-ta-hay-meo-tay-2.jpg"},
      { id:3, name: "Product 3", img: "https://thuythithi.com/wp-content/uploads/2023/04/nen-chon-nuoi-meo-ta-hay-meo-tay-2.jpg"},
    ];

    res.render("product.ejs", {products: products} );
  });

app.listen(5000, () => {
    console.log("server is running on port 50000");
    });
    


//mo hinh MVC