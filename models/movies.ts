import mongoose from "mongoose";

const MoviesDB = mongoose.connection.useDb("sample_mflix");

const MoviesSchema = new mongoose.Schema({
  title: { type: String },
});

const Movies = MoviesDB.model("movie", MoviesSchema, "movies");

export default Movies;
