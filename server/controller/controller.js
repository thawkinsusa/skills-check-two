
module.exports ={
create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const {property, address, city, state, zipcode} = req.body
    dbInstance.create_house([ property, address, city, state, zipcode])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },
  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    console.log('object');
    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },
}