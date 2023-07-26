const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    bookName: { type: String, required: true },
    auth: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    issueData: { type: String, required: true }
})


module.exports = mongoose.model("Book", booksSchema);