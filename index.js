const express = require("express");
const cors = require("cors");
const appRouter = require("./routers");
require("./config/db")

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', appRouter);





app.listen(5000, (err) => {
    if (err) {
        console.log("server starting error");
    } else {
        console.log("server running on port 5000")
    }
})

