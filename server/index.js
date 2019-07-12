require("dotenv").config();
const express = require("express");
const massive = require("massive");
const houses_controller = require('./controller/controller')
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log('object')
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.post('/api/houses', houses_controller.create);
app.get('/api/houses', houses_controller.getAll);
app.delete('/api/houses/:id', houses_controller.delete);
app.get('/api/image', houses_controller.getAllImage);
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});