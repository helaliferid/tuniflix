const express = require('express');
const router = express.Router();
const MovieService = require('../services/movies.service');


/* GET users listing. */
router.get('/all',async function(req, res, next) {
   let movies = await MovieService.getAllMovies();
   res.json(movies);
});

module.exports = router;
