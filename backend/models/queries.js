const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'postgres',
    port: 5432,
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}


const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users where id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        // return the results as a JSON with status code OK
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    // get name and email from the request
    const {name, email} = req.body
    
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
        if (error) {
            throw error
        }
        //If successfull return the ID of the new user
        res.status(201).send(`User added with ID ${result.insertId}`)
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const {name, email} = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, result) => {
            if (error) {
                throw error
            }

            // Send response if everything is ok
            res.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
        if (error){
            throw error
        }

        // Everything is OK
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
