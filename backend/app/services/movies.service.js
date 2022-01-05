const MovieModel=require('../schemas/movies.schema');

const getAllMovies=async ()=>{
    let movies=await MovieModel.find();
    return movies;
}

const getMovieById=async (id)=>{
    let movie=await MovieModel.findById(id);
    return movie;
}

const addMovie= async (movie)=>{
    const result = await MovieModel.create(movie);
    return result;
}

const deleteMovie = async (id)=>{
    let result = MovieModel.findByIdAndRemove({_id:id});
    return result;
}

const updateMovie = async (oldMovie)=>{
    let tempMovie = delete oldMovie._id;
    let result =await MovieModel.findByIdAndUpdate(oldMovie._id,tempMovie);
}


module.exports={
    getAllMovies,
    addMovie,
    deleteMovie,
    updateMovie
}
