require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

async function add_user(name, email, password) {
    try {
        const result = await pool.query("INSERT INTO users (user_name, mail, pass) VALUES ($1, $2, $3) RETURNING*;",
        [`${name}`, `${email}`,`${password}`]
        )
        return result.rows
    } catch (e) {
        return e
    }
}

async function get_users() {
    try {
        const result = await pool.query("SELECT * FROM users;")
        return result.rows
    } catch (e) {
        return e
    }
}

async function get_user(email) {
    try {
        const result = await pool.query("SELECT * FROM users WHERE mail = $1;", 
        [`${email}`])
        return result.rows
    } catch (e) {
        return e
    }
}

module.exports = {add_user, get_users, get_user}