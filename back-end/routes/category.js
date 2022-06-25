const express = require("express")
const router = express.Router()
const { get_categories } = require("../queries/queryCategory")



router
    .route("/categories")
    .get(async (req, res) => {
        try {
            const response =  await get_categories()
            res.status(200).send(response)
        } catch (e) {
            console.log(e)
        }
    })




module.exports = router