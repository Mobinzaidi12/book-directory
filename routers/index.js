const { Router } = require("express");
const bookRouter = require("./booksRouter");


const appRouter = Router();

appRouter.use('/books', bookRouter)


module.exports = appRouter;