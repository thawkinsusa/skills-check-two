
module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { property, address, city, state, zipcode } = req.body
    dbInstance.create_house([property, address, city, state, zipcode])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Create is broke $#@%" });
        console.log(err)
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log('object');
    dbInstance.read_houses()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "getAll is broken !@#$" });
        console.log(err)
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params

    dbInstance.delete_house(id)
      .then(() => res.sendStatus('all good in the hood'))
      .catch(err => {
        res.status(500).send({ errorMessage: "Delete is broken !@#$" });
        console.log(err)
      });
  },
  getAllImage: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log('object');
    dbInstance.read_image()
      .then(image => res.status(200).send(image))
      .catch(err => {
        res.status(500).send({ errorMessage: "getAll image is broken !@#$" });
        console.log(err)
      });
  },

}
