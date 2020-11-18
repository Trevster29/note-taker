const express = require("express");

const mysql = require("mysql");

//connect create
const db = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "simplilearn",
  
    database: "nodemysql",
  
});

//connect to sql
db.connect((err) => {

if (err) {
  throw err;
  }
    console.log("MySql Connected");
  
});

const app = express()

//database created
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
      if (err) {
          throw err;
      }
      res.send("Database Created");
  })
});

app.listen("3000", () => {
    console.log("server started on port 3000")
})

app.get("/createemployee", (req, res) => {

    let sql =
  
      "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
  
    db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("table made");
  
    });
});

app.get("/employee1", (req, res) => {

    let post = { name: "Trevor McNamara", designation: "The Big Cheese" };
  
    let sql = "INSERT INTO employee SET ?";
  
    let query = db.query(sql, post, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("employee made");
  
    });
  
});  

app.get("/updateemployee/:id", (req, res) => {

    let newName = "Updated name";
  
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Finalized update");
  
    });
  
});

app.get("/deleteemployee/:id", (req, res) => {

    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee deleted");
  
    });
  
});
  
   
  
app.listen("3000", () => {
  
    console.log("Server started on port 3000");
  
});

  