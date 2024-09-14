const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
})
app.get('/:username', (req, res) => {
    const username = req.params.username;
    if (username) {
        const sql = `INSERT INTO people (name) values('${username}')`
        connection.query(sql)
        connection.end()
    }
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})