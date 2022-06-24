require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

async function get_income(id) {
    try {
        const result = await pool.query("SELECT * FROM income WHERE id= $1;",
        [`${id}`])
        return result.rows
    } catch (e) {
        return e
    }
}

async function add_income(concept, amount, date, category, userid) {
    try {
        const result = await pool.query("INSERT INTO income (concept, amount, income_date, category_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING*;",
        [`${concept}`,`${amount}`,`${date}`,`${category}`,`${userid}`]
        )
        return result.rows
    } catch (e) {
        return e
    }
}

module.exports = {get_income, add_income}