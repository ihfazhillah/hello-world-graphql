var express = require("express"),
  app = express();

app.use("/graphql", (req, res, next) => {
  res.send("hello world, endpoint ini akan kita jadikan graphql endpoint");
});

app.listen(3000, () => console.log("server berjalan di http://localhost:3000"));
