const mysql = require("mysql");

const db = mysql.createConnection({
    host:"sql12.freesqldatabase.com",
    user: "sql12665236",
    password: "tUpYzx5DLj",
    database: "sql12665236"

});

db.connect(error => {
    if(error) throw error;
    console.log("DB Connected");
});

module.exports = db