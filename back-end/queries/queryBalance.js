require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const get_balance = async () => {
    try {
        const result = await pool.query("SELECT * FROM balance;")
        return result.rows
    } catch (e) {
        return console.log(e)
    }
}


const get_balance_user = async (id) => {
    try {
        const result = await pool.query("SELECT * FROM balance WHERE id= $1;",
        [`${id}`])
        return result.rows
    } catch (e) {
        return console.log(e)
    }
}

const add_balance = async (user_id, amount) => {
    try {
        const result = await pool.query("INSERT INTO balance (user_id, amount) VALUES ($1, $2);",
        [`${user_id}`, `${amount}`])
        return result.rows
    } catch (e) {
        return console.log(e)
    }
}

const balance_addition = async(user_id, amount) => {
    try {
        const result = await pool.query("UPDATE balance SET amount = amount + $2 WHERE user_id = $1 RETURNING*;",
        [`${user_id}`, `${amount}`])
        return result.rows
    } catch (e) {
        return console.log(e)
    }
}

const balance_discount = async(user_id, amount) => {
    try {
        const result = await pool.query("UPDATE balance SET amount = amount - $2 WHERE user_id = $1 RETURNING*;",
        [`${user_id}`, `${amount}`])
        return result.rows
    } catch (e) {
        return console.log(e)
    }
}




module.exports = {get_balance, add_balance, get_balance_user, balance_addition, balance_discount}