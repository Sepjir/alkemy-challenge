require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})




async function report_income(id) {
    try {
        const result = await pool.query("SELECT income.id, income.concept, categories.category_name, income.amount, types.name_type, to_char(income.income_date, 'DD/MM/YYY') FROM income INNER JOIN categories ON (income.category_id = categories.id) INNER JOIN types ON (categories.type_id = types.id) WHERE income.user_id=$1 ORDER BY income.income_date;",
        [`${id}`])
        return result.rows
    } catch (e) {
        return e
    }
}

async function report_expenditure(id) {
    try {
        const result = await pool.query("SELECT expenditures.id, expenditures.concept, categories.category_name, expenditures.amount, types.name_type, to_char(expenditures.expenditure_date, 'DD/MM/YYY') FROM expenditures INNER JOIN categories ON (expenditures.category_id = categories.id) INNER JOIN types ON (categories.type_id = types.id) WHERE expenditures.user_id=$1 ORDER BY expenditures.expenditure_date;",
        [`${id}`])
        return result.rows
    } catch (e) {
        return e
    }
}




module.exports = {report_income, report_expenditure}