// Import github config
const axios = require('axios');
// Import github headers config
const config = require('./config.js');
config.url = `${config.url}/reviews`

// Helper function that dynamically stringifies params
// getParamsQuery = params => {
//   let queryArr = [];
//   for (param in params) {
//     queryArr.push(`${param}=${params[param]}`);
//   }
//   return `?${queryArr.join('&')}`
// }

// Controllers for Ratings & Reviews
const controllersRR = {


  /* ---------------
  Review API Queries
  --------------- */

  // Get reviews by product id
  getReview: (req, res) => {
    axios.get(`${config.url}/?product_id=${req.params.product_id}`, config.headers)
      .then(resp => res.status(200).send(resp.data))
      .catch(err => res.status(400).send(err))
  },

  // Get review meta data by product id
  getReviewMeta: (req, res) => {
    axios.get(`${config.url}/?product_id=${req.params.product_id}`, config.headers)
      .then(resp => res.status(200).send(resp.data))
      .catch(err => res.status(400).send(err))
  },

  // Post a review to a product by product_id
  postReview: (req, res) => {
    axios.post(`${config.url}`, req.body, config.headers)
      .then(resp => res.status(200).send(`Posted review for ${req.body.name}`))
      .catch(err => res.status(400).send(`Failed to post review for ${req.body.name}. Error: ${err}`))
  }
};

module.exports = controllersRR;