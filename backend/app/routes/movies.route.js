const express = require('express');
const router = express.Router();
const MovieService = require('../services/movies.service');


/* GET users listing. */
router.get('/all',async function(req, res, next) {
   let movies = await MovieService.getAllMovies();
   res.json(movies);
});

router.post('/add',async function(req,res){
   let movie = req.body;
   let result = await MovieService.addMovie(movie);
   res.json({message:'Movie added Successfully',data:result});
})

module.exports = router;
