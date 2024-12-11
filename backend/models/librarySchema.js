import mongoose from "mongoose";
import validator from "validator";

const librarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Library", librarySchema);
export default Book;
