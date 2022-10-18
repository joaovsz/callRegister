const express = require('express');
const mysql = require('mysql');
const app = express()

const db = mysql.createPool({
  host: 'localhost',
  user: "root",
  password: "mdz5eduj",
  database:  "callcounter"
})

app.get("/", (req, res) => {
  let SQL = "INSERT INTO calls (call_id, registered_at, is_canceled, type_call) VALUES ('778626', '2022-10-17', '1', 'Venda Indevida')"
  db.query(SQL, (err, result) => {
    console.log(result)
  })
})

app.listen(3001, (err, res) => {
  console.log("Rodando")
})