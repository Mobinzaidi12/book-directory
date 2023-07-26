const Books = require("../models/Book");

const createBooksDetail = async (req, res) => {
    try {
        const { bookName, auth, description, price, issueData } = req.body;
        const bookData = await Books.create({
            bookName,
            auth,
            description,
            price,
            issueData
        });
        res.status(200).json({ status: true, bookData });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}


const getBookDetail = async (req, res) => {

    try {
        const books = await Books.find();

        if (books.length < 1) {
            res.status(401).json({ status: false, message: "Data not found" })
        }

        res.status(200).json({ status: true, books })


    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}


const deleteBookData = async (req, res) => {

    try {

        const deleteData = await Books.deleteOne({
            _id: req.params.id
        });
        res.status(200).json({ status: true, message: "Data Delete" })



    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }

}


const updateBookData = async (req, res) => {
    try {

        const { bookName, auth, description, price, issueData } = req.body;
        const dataUpdate = await Books.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    bookName,
                    auth,
                    description,
                    price,
                    issueData
                }
            }
        );

        res.status(200).json({ status: true, message: "Data Update" })

    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

module.exports = {
    createBooksDetail, getBookDetail, deleteBookData, updateBookData
}