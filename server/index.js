const express = require('express');
const faker = require('faker');
const _ = require('lodash');

const bodyParser = require('body-parser');
const cors = require('cors');
// const { ProductModel, ReviewModel } = require('../database/Reviews.js'); // eslint-disable-line
const db = require('./db/og-mongo/queries.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/product/:productID', express.static(`${__dirname}/../public`));
/*
  * Finished *
    Reviews
      * Create One
      * Read All

  !Unfinished
    Reviews
      ! Create one
      ! Update one
      ! Delete One

    Products
      !  Create One
      !  Read One
      !  Update One
      !  Delete One
*/

/* Fetch All Reviews for a Product */
app.get('/reviews/:productID', async (req, res) => {
  const product = await db.reviews.read(req.params);
  res.status(200).send(product.reviews);
});


/* Create One Product Review */
// ! Still needs to accept user review
app.post('/reviews/:productID', async (req, res) => {
  const reviews = await db.reviews.create(req.params, req.body);
  res.status(200).send(reviews);
});

/* Fetch One Product Review */
app.get('/review/:productID/:reviewID', async (req, res) => {
  const review = await db.review.read(req.params);
  res.status(200).send(review);
});

/* Create One Product Review */
app.post('/review/:productID', async (req, res) => {
  const reviews = await db.reviews.create(req.params, req.body);
  res.status(200).send(reviews);
});

/* Update One Product Review */
// eslint-disable-next-line no-unused-vars
app.put('/review/:productID/:reviewID', async (req, res) => {
  const reviews = await db.review.update(req.params, req.body);
  res.status(200).send(reviews);
});

// TODO *********************

/* Delete One Product Review */
// eslint-disable-next-line no-unused-vars
app.delete('/review/:productID/:reviewID', async (req, res) => {
  const reviews = await db.review.delete(req.params);
  res.status(200).send(reviews);
});
// TODO Products
/* Create One Product */
// eslint-disable-next-line no-unused-vars
app.post('/product/:productID', async (req, res) => {
  //! Accepts data from request
});

/* Fetch One Product */
// eslint-disable-next-line no-unused-vars
app.get('/product/:productID', async (req, res) => {
  // fetch entire product
});

/* Update One Product */
// eslint-disable-next-line no-unused-vars
app.put('/products/:productID', async (req, res) => {
  // Update one product
});

/* Delete One Product  */
// eslint-disable-next-line no-unused-vars
app.delete('/products/:productID', async (req, res) => {
  // Delete one product
});


// OPTIONS
/* Delete One Product Review */
// eslint-disable-next-line no-unused-vars
app.options('/reviews', async (req, res) => {
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports = app;
