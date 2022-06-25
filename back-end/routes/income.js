const express = require("express")
const router = express.Router()
const {get_balance, add_balance, balance_addition, balance_discount} = require("../queries/queryBalance")
const {add_income, mod_income, delete_income} = require("../queries/queryIncome")
const {add_expenditure, mod_expenditure, delete_expenditure} = require("../queries/queryExpenditure")
const {report_income} = require("../queries/queryReport")


router
    .route("/income/")
    .get((req, res) => {

    })
    .post(async (req, res) => {
        const {type, concept, amount, date, category, userid} = req.body
        const balance =  await get_balance()
        const findBalance = balance.find((item) => item.user_id == userid)
        if (!findBalance) {
            try {
                if (type == 1) {
                    await add_income(concept, amount, date, category, userid)
                    await add_balance(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                } if (type == 2) {
                    res.status(500).send({
                        error: "Aún no se ha hecho un ingreso, el balance no puede ser negativo",
                        volver: 'http://localhost:3000/dashboard'
                    })
                    return
                }
            } catch (e) {
                console.log(e)
            }
            
        } else {
            try {
                if (type == 1) {
                    await add_income(concept, amount, date, category, userid)
                    await balance_addition(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                } if (type == 2) {
                    await add_expenditure(concept, amount, date, category, userid)
                    await balance_discount(userid, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    return
                }
            } catch (e) {
                console.log(e)
            }
        }

    })

router
    .route("/income/:id")
    .get(async (req, res) => {
        const {id} = req.params
        try {
            const response = await report_income(id)
            res.status(200).send(response)
        } catch (e) {
            console.log(e)
        }
    })
    .post(async (req, res) => {
        const {id} = req.params
        const {concept, amount, originValue, nameType, userid} = req.body
        const differential = amount - originValue

        if (nameType == "Ingreso") {
            if (differential > 1) {
                try {
                    await mod_income(id, concept, amount)
                    await balance_addition(userid, differential)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                } catch (e) {
                    console.log(e)
                }
                
            } if (differential < 0) {
                try {
                    const diff = originValue - amount
                    await mod_income(id, concept, amount)
                    await balance_discount(userid, diff)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    
                } catch (e) {
                    console.log(e)
                }
            } if (differential == 0) {
                try {
                    await mod_income(id, concept, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    
                } catch (e) {
                    console.log(e)
                }
            }
            
        } else {
            if (differential > 1) {
                try {
                    await mod_expenditure(id, concept, amount)
                    await balance_discount(userid, differential)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                } catch (e) {
                    console.log(e)
                }
                
            } if (differential < 0) {
                try {
                    const diff = originValue - amount
                    await mod_expenditure(id, concept, amount)
                    await balance_addition(userid, diff)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    
                } catch (e) {
                    console.log(e)
                }
            }if (differential == 0) {
                try {
                    await mod_expenditure(id, concept, amount)
                    res.status(200).redirect("http://localhost:3000/dashboard")
                    
                } catch (e) {
                    console.log(e)
                }
            }
        }
    })
    .delete( async (req, res) => {
        const {id} = req.params
        const {userid, amount, typeName} = req.body
        console.log(userid, amount, typeName)
        if (typeName === "Ingreso") {
            try {
                await delete_income(id)
                await balance_discount(userid, amount)
                res.status(200).send("http://localhost:3000/dashboard")
            
            } catch (e) {
                console.log(e)
            } 
        } else {
            try {
                await delete_expenditure(id)
                await balance_addition(userid, amount)
                res.status(200).send("http://localhost:3000/dashboard")
            } catch (e) {
                console.log(e)
            }
        }

    })


module.exports = router