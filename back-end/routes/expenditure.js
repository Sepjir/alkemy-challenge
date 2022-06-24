const express = require("express")
const router = express.Router()
const {report_expenditure} = require("../queries/queryReport")

router
    .route("/expenditures/:id")
    .get(async (req, res) => {
        const {id} = req.params
        const response = await report_expenditure(id)
        res.status(200).send(response)
    })

module.exports = router