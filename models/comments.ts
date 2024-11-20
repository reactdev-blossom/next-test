import mongoose from "mongoose";

const sampleDB = mongoose.connection.useDb("sample_mflix");

const CommentSchema = new mongoose.Schema({
  name: { type: String },
  text: { type: String },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  email: { type: String },
  date: { type: Date, default: Date.now },
});

const Comments = sampleDB.model("comment", CommentSchema, "comments");

export default Comments;
