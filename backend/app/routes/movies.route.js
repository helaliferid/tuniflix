const express = require('express');
const router = express.Router();
const MovieService = require('../services/movies.service');
const upload = require('../services/upload.service').upload;


/* GET users listing. */
router.get('/all',async function(req, res, next) {
   let movies = await MovieService.getAllMovies();
   res.json(movies);
});


router.post('/add',upload.single('cover'), async function(req,res){
   let movie = req.body;
   let result = await MovieService.addMovie(movie);
   res.json({message:'Movie added Successfully',data:result});
})

module.exports = router;
