const express = require("express")
const router = express.Router()

const {get_balance_user} = require("../queries/queryBalance")

router
    .route("/balance/:id")
    .get( async (req, res) => {
        const {id} = req.params
        try {
            const response = await get_balance_user(id)
            res.status(200).send(response)
            
        } catch (e) {
            console.log(e)
        }

    })




module.exports = router