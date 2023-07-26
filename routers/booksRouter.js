const { Router } = require("express");
const { createBooksDetail, getBookDetail, deleteBookData, updateBookData } = require("../controllers/bookController");

const bookRouter = Router();

bookRouter.post('/create', createBooksDetail);
bookRouter.get("/all", getBookDetail);
bookRouter.delete('/:id', deleteBookData);
bookRouter.put("/:id", updateBookData)



module.exports = bookRouter;