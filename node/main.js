const express = require("express");
const app = express();
const port = 3000;
const config = {
  connectionLimit: 10,
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const pool = mysql.createPool(config);

app.get("/", (req, res) => {
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.get("/:username", (req, res) => {
  const username = req.params.username;
  if (username === 'favicon.ico')  return res.status(204).send();

  if (username) {
    const sqlInsert = `INSERT INTO people (name) values(?)`;
    const sqlSelect = `SELECT * FROM people;`;

    pool.getConnection((err, connection) => {
      if (err)
        return res
          .status(500)
          .send("Erro ao obter a conexão do banco de dados.");

      connection.query(sqlInsert, [username], (err) => {
        if (err) {
          connection.release();
          return res.status(500).send("Erro ao inserir no banco de dados.");
        }

        connection.query(sqlSelect, (err, result) => {
          connection.release();
          if (err)
            return res.status(500).send("Erro ao buscar no banco de dados.");

          res.send(result);
        });
      });
    });
    return;
  }
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
