require("dotenv").config();
const express = require("express");
const massive = require("massive");
const products_controller = require('./controller/controller')
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});